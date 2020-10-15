import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faBars, faUserFriends, faUniversity, faPaintRoller, faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import MyNavbar from './components/NavbarAndSidebar/MyNavbar';
import LandingPage from './components/LandingPage/LandingPage';
import SinglePage from './components/SinglePage/SinglePage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Loading from './components/Loading/Loading';
import { Power1, gsap, CSSPlugin } from 'gsap';
gsap.registerPlugin(CSSPlugin)
library.add(faTwitter, faTimes, faBars, faLinkedinIn, faFacebookF, faClock, faUserFriends, faUniversity, faPaintRoller, faPhoneAlt, faEnvelope, faMapMarkerAlt, faTimesCircle);

class App extends React.Component {

  state = {
    allGames: [],
    filterButtons: {
      category: [],
      timeFrame: [],
      groupSize: []
    },
    activeFilters: {
      category: [],
      timeFrame: [],
      groupSize: []
    },
    default: true,
    filteredGames: [],
    chosenGame: {},
    fetched: false
  }


  componentDidMount() {
    fetch('https://brainsterboxapi.herokuapp.com/games')
      .then(res => res.json())
      .then(data => {
        let categories = [];
        let timeFrames = [];
        let groupSizes = [];
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          categories.push(element.category.toLowerCase());
          const numbersOnly = element.timeFrame.split(' ');
          timeFrames.push(numbersOnly[0]);
          groupSizes.push(element.groupSize);
        }
        // const uniqueCategories = new Set(categories);
        const uniqueTimeFrames = new Set(timeFrames);
        const uniqueGroupSizes = new Set(groupSizes);
        this.setState({
          allGames: data,
          filterButtons: {
            category: categories,
            timeFrame: [...uniqueTimeFrames],
            groupSize: [...uniqueGroupSizes]
          },
          filteredGames: data,
          fetched: true
        })
        this.chosenGame(data)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activeFilters !== prevState.activeFilters) {
      let allGames = JSON.parse(JSON.stringify(this.state.allGames));
      const activeCategories = this.state.activeFilters.category;
      const activeTimeframes = this.state.activeFilters.timeFrame;
      const activeGroupsizes = this.state.activeFilters.groupSize;
      let gamesToShow = [];
      allGames.forEach(game => {
        if (
          (activeCategories.includes(game.category.toLowerCase()) || activeCategories.length === 0) &&
          (activeTimeframes.includes(game.timeFrame.split(' ')[0]) || activeTimeframes.length === 0) &&
          (activeGroupsizes.includes(game.groupSize.toLowerCase()) || activeGroupsizes.length === 0)) {
          gamesToShow.push(game)
        }
      })
      if (activeCategories.length === 0 && activeTimeframes.length === 0 && activeGroupsizes.length === 0) {
        this.setState({ default: true })
      }
      gamesToShow.sort((a, b) => a.category.localeCompare(b.category));
      this.setState({ filteredGames: gamesToShow }, function () {
        this.play()
      });
    }
    if (prevProps.location !== this.props.location) {
      this.chosenGame(this.state.filteredGames)
    }
  }

  chosenGame = (games) => {
    if (this.props.location.pathname.includes('game')) {
      const clickedGame = games.find(element => {
        return element.id === this.props.location.pathname.substring(6, 9)
      })
      this.setState({ chosenGame: clickedGame })
    }
  }

  changeActiveFilters = (filterBy, query, checked) => {
    let activeFilters = JSON.parse(JSON.stringify(this.state.activeFilters));
    if (checked) {
      activeFilters[filterBy].push(query);
    } else {
      const remove = (element) => element === query;
      let filterToRemove = activeFilters[filterBy].findIndex(remove);
      activeFilters[filterBy].splice(filterToRemove, 1);
    }
    this.setState({ default: false, activeFilters: activeFilters });
  }

  resetFilters = () => {
    this.setState({
      filteredGames: this.state.allGames,
      default: true,
      activeFilters: {
        category: [],
        timeFrame: [],
        groupSize: []
      }
    })
  }

  play = () => {
    if (this.state.filteredGames.length > 0) {
      gsap.fromTo('.SingleGameCard', { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, ease: Power1.easeOut, stagger: 0.1 });
    } else {
      gsap.from('.no-games', { autoAlpha: 0, ease: Power1.easeOut })
    }
  }

  render() {
    return (
      <div className="App">
        <ScrollToTop />
        <MyNavbar />
        {!this.state.fetched && <Loading />}
        <Switch>
          <Route exact path="/"
            render={() =>
              <LandingPage
                data={this.state.filteredGames.length > 0 ? this.state.filteredGames : 'Нема игра со избраните критериуми'}
                filterButtons={this.state.filterButtons}
                changeActiveFilters={this.changeActiveFilters}
                resetFilters={this.resetFilters}
                default={this.state.default}
                activeFilters={this.state.activeFilters}
                fetched={this.state.fetched}
              />}
          />
          <Route path='/game/:game' exact render={() => <SinglePage data={this.state.chosenGame} />} />
          <Route path='/Log-in' exact component={LogIn} />
          <Route path='/Register' exact component={Register} />
          <Route path='/brainster.co/about' exact component={AboutUs} />
          <Route path='/brainster.co/contact' exact component={ContactUs} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);