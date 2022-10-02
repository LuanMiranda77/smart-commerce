import styled from 'styled-components';

export const Container = styled.header`

  display:flex;
  margin: 0;
  
 
  @media (max-width: 720px){
        width:100%;
        margin: 0 auto;
        
  }

  img{
    width:30%;
    margin: 5%  35% auto;
    margin-bottom: 2rem;
    @media (max-width: 720px){
        width:70%;
        margin: 5%  15% auto;
    }
  }

  h3{
    margin-top: 2rem;
    text-align: center;
    margin-bottom:  2rem ;
    color: ${color => color.theme.colors.primary};
    /* padding: 3 1rem 10rem; */
   }

   .div-left{
      align-items: center;
      margin-top: 3%;
      width:50%;
      border-radius: 10px;
      padding: 0 1rem 1rem;
      /* height: 89vh; */
   }

   .div-right{
      background: ${color => color.theme.colors.primary};
      align-items: center;
      text-align: center;
      color: white;
      width:50%;
      border-radius: 5px;
      padding: 1rem;
      height: 100vh;
      box-shadow: 0px 2px 5px 5px silver;
   }
   
  .div-login{
    width:50%;
    margin-right: -2rem;
    @media (max-width: 720px){
        width:91%;
        margin: 0 1rem auto; 
      } 
    .p-fluid{
      width:100%;
    }
}

  .div-link{
      margin-top: 1.5rem;
      /* justify-content: baseline; */
      font-weight: bold;
      font-size: 14px;

      @media (max-width: 720px){
      font-size: 14px;
      }
      @media (max-width: 1025px){
           font-size: 12px;
        }

      a{
      text-decoration: none;
      }


      .cadastro{
        color:${color => color.theme.colors.success};;
        margin-right:39%;

        
        @media (max-width: 720px){
          margin-right:10rem ;
        }
        
      }

      .esquece{
        color:${color => color.theme.colors.secondary};
        width: 120%;
      }

   }
  .divider{
    @media (max-width: 720px){
      visibility: hidden;
      margin-top: -20px;
    }

  }
  .coletor{
    margin-left: -1.5rem;
    width:40%;

    @media (max-width: 720px){
     width:92%;
     margin-top: -1.0rem;
     margin-bottom: 2rem;
   }

    .google{
    margin-top: 10%;
    margin-bottom: 2rem;
    width:100%;

    @media (max-width: 720px){
      margin: 0 2.5rem  auto;
      width:100%;
    }
  }

  .facebook{
    width:100%;
  
    @media (max-width: 720px){
      margin: 0 2.5rem;
      margin-top: 1rem;
      width:100%;
    }
  }

  }
  

`


