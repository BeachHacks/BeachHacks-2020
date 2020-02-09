import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Sponsors from './Sponsors';
import FAQ from './FAQ';
import Index from './Index';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Index />
        <FAQ />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}
