import { Container } from '@mui/material';
import React from 'react';
import classes from './Footer.module.scss';

function Footer() {
  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/home" className="hover:text-gray-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:text-gray-300">Services</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              123 Main Street, City, Country
            </p>
            <p className="text-sm">
              Email: info@example.com
            </p>
            <p className="text-sm">
              Phone: +1 123 456 7890
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
