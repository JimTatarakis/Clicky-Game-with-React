import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col s12 grey-text lighten-2">
                        <h6 className="grey-text lighten-2">Follow Me</h6>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jimtatarakis?lang=en" className="white-text">
                            <i className="fab fa-twitter fa-4x"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jamestatarakis/" className="white-text">
                            <i className="fab fa-instagram fa-4x"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/james-tatarakis-9a595394/" className="white-text">
                            <i className="fab fa-linkedin fa-4x"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/JimTatarakis" className="white-text">
                            <i className="fab fa-github fa-4x"></i>
                        </a>
                    </div>
                </div>

                <div className="row right">
                    <div className="col s12">
                        <p className="grey-text lighten-2">Jim Tatarakis &copy; 2019</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
