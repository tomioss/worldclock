import React, { Component } from 'react';

import { footerItems } from "../constants/footer";

class Footer extends Component {
  render() {
    return (
      // Footer
      <footer id="footer" className="row">
        {footerItems.written}<a target="_blank" rel="noopener noreferrer" href={footerItems.link}>{footerItems.react}</a>{footerItems.period}
        <br />
        &copy; {footerItems.copy}
      </footer>
    );
  }
}

export default Footer;
