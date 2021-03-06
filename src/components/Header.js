import React, { Component } from 'react';
import { MDBContainer, MDBView, MDBMask } from 'mdbreact';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <MDBContainer>
                    <MDBMask overlay="grey-light" className="flex-column text-white text-left d-flex justify-content-center">
                        <div className="header-card">
                            <h2>Meri Niemi 427</h2>
                            <br />
                            <p>
                                Rohkeus ja halu ymmärtää enemmän ovat vieneet minua aina eteenpäin. 
                                Haluan rakentaa entistä tasa-arvoisempaa maailmaa aloittamalla Suomen Turusta. 
                                Antirasismi ja intersektionaalinen feminismi ovat tärkeimpiä arvojani niin työssäni tanssinopettajana kuin tanssisalin ulkopuolella. 
                            </p>
                        </div>
                    </MDBMask>
                </MDBContainer>
            </div>
        )
    }
}

export default Header;