import React from 'react';
import './AboutUs.css';
import Footer from '../Footer/Footer';
import CourseCard from './CourseCard';


function AboutUs() {

    return (
        <div className='AboutUs'>
            <h1>About Brainster</h1>
            <h4>Brainster е платформа за офлајн курсеви каде можеш да научиш програмирање, дизајн, маркетинг и бизнис. Нашата визија е да го претвориме целиот град во универзитет, секој простор во училница и секој од нас во инструктор и студент. Brainster ти овозможува активно да учествуваш во градењето на локалната 2.0 заедница, да се вмрежиш со луѓе со слични интереси, да креираш, да го споделуваш твоето знаење и да учиш од другите.</h4>
            <div className='courses-and-academies-container'>
                <div className='Courses'>
                    <h2>Курсеви</h2>
                    <CourseCard description='Курс за WordPress' link='https://brainster.co/courses/programiranje/kurs_wordpress_' />
                    <CourseCard description='Курс за Дигитален Маркетинг' link='https://brainster.co/courses/marketing/kurs_digitalen' />
                    <CourseCard description='Курс: Вовед во Data Science' link='https://brainster.co/courses/data_science/kurs_data-science' />
                    <CourseCard description='Курс за Scrum Methodology' link='https://brainster.co/courses/programiranje/kurs_scrum' />
                    <CourseCard description='Курс за SEO' link='https://brainster.co/courses/marketing/kurs_seo' />
                    <CourseCard description='Курс за Facebook и Instagram рекламирање' link='https://brainster.co/courses/marketing/kurs_facebook_instagram' />
                </div>
                <div className='Academies'>
                    <h2>Академии</h2>
                    <CourseCard description='Академија за дигитален маркетинг' link='https://marketpreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=mkt' />
                    <CourseCard description='Академија за графички дизајн' link='https://design.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=design' />
                    <CourseCard description='Академија за Front End Програмирање' link='http://codepreneurs.co/akademija-za-web-design/' />
                    <CourseCard description='Академија за Full Stack Програмирање' link='http://codepreneurs.co/akademija-za-web-programiranje/' />
                    <CourseCard description='Академија за DATA SCIENCE' link='https://datascience.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=data_science' />
                    <CourseCard description='Академија за Software Testing' link='https://qa.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=qa' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs