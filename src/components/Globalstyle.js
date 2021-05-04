import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bodywhite};
    color: ${({ theme }) => theme.normaltext};
    font-family:'Nunito', sans-serif, sans-serif;
    transition: all 0.50s linear;
  }
  .secondheader>.text>h4,.whydsc>.text.h6, .joinus>.text>h6, .event-cards>.row>.col-md-3>div>h3, .joinus>.text>h6, .event-cards>.row>.col-md-3>div>.duration>h6, .whydsc>.text>h6, #event>div>div>div>.card>.card-body>p{
    color: ${({ theme }) => theme.normaltext};
  }
  .secondheader>.text>h4>span.bold, .whydsc>.text>h6>.bold .whydsc>.text>h2, #event>div>h1,#event>div>div>div>.card>.card-body>h3, .whydsc>.text>h6>.bold{
    color: ${({ theme }) => theme.titletext};
  }
 
  .aboutus>.whydsc, .aboutus>.upcomingevents{
    background: ${({ theme }) => theme.bodybeige};
  }
  .covihack-page{
    background:white !important;
    width:100%;
  }
  `
