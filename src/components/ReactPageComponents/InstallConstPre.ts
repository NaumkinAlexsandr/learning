export const install: string = `
import React from 'react';
import { Helmet } from 'react-helmet';

const MyComponent = () => {
  return (
    <>
      <Helmet>
        <title>My page</title>
        <meta name="description" content="my page" />
        <link rel="canonical" href="https://www.example.com/my-page" />
      </Helmet>
      <div>
        <h1>Hello World!</h1>
      </div>
    </>
  );
};

export default MyComponent;
`;

export const router: string = `
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About us</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
`;
// export const useState: string = `

// `;
// export const useState: string = `

// `;
// export const useState: string = `

// `;
// export const useState: string = `

// `;
// export const useState: string = `

// `;
// export const useState: string = `

// `;
// export const useState: string = `

// `;
// export const useState: string = `

// `;
// export const useState: string = `

// `;
