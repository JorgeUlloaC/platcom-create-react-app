import React, { Component} from 'react';



class Header extends Component{


      render(){
        return (
          <div className="row bg-dark text-white">
            <h1 className="col-md-3">
              PLATCOM<span>FCI</span>
            </h1>
            <nav className="col-md-9">
              <ul className="navbar">
                {[1, 2, 3, 4].map(n => {
                  return (
                    <li key={n}>
                      <a
                      onClick={()=>this.props.onSemestre(n, undefined)}
                      >
                        Semestre {n}
                      </a>
                    </li>
                      );
                    })}
                </ul>
              </nav>
          </div>
        );
      }
    }    

export default Header