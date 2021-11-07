import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FC } from "react";
import { Home, Necklaces, Bracelets, Error } from "../pages";
import MainNavigation from "../components/Shared/MainNavigation";
import { Container } from "react-bootstrap";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path={["/bracelets", "/armband", "/armsmykke"]}
            component={Bracelets}
          />
          <Route
            path={["/necklaces", "/kjeder", "/halssmykke"]}
            component={Necklaces}
          />
          <Route path="*" component={Error} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
