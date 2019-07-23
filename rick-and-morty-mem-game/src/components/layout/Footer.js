import React from 'react'

export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col s12 grey-text lighten-2">
                            <h6 class="grey-text lighten-2">Follow Me</h6>
                            <a target="_blank" href="https://twitter.com/jimtatarakis?lang=en" class="white-text">
                                <i class="fab fa-twitter fa-4x"></i>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/jamestatarakis/" class="white-text">
                                <i class="fab fa-instagram fa-4x"></i>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/james-tatarakis-9a595394/" class="white-text">
                                <i class="fab fa-linkedin fa-4x"></i>
                            </a>
                            <a target="_blank" href="https://github.com/JimTatarakis" class="white-text">
                                <i class="fab fa-github fa-4x"></i>
                            </a>
                        </div>
                    </div>

                    <div class="row right">
                        <div class="col s12">
                            <p class="grey-text lighten-2">Jim Tatarakis &copy; 2019</p>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
