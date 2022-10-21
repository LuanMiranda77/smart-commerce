import React, { useContext, useEffect,  useState  } from "react"

import { Container } from './styles';

/**
*@Author
*@Issue
*/

function Dashboard(){

  return <Container>
            <div className="grid md:grid-cols-1 gap-2 lg:grid-cols-4 gap-2">
              <div className="card-local">
                    cartão
              </div>
              <div  className="card-local">
                    dinheiro
              </div>
              <div className="card-local">
                        cada
              </div>  
              <div className="card-local">
                        aa
              </div>
            </div>
    
         </Container>;
}
export default Dashboard;