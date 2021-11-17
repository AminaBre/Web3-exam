import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FC } from "react";
import {
  Home,
  Rings,
  Necklaces,
  Bracelets,
  Error,
  Profile,
  BraceletDetails,
} from "../pages";
import MainNavigation from "../components/Shared/MainNavigation";
import Footer from "../components/Shared/Footer";
import { Container } from "react-bootstrap";

//Hadde allerede startet på eksamen  før  endringene om switch, element osv ble tatt i bruk.
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
          <Route path="/bracelet-details/:id" component={BraceletDetails} />
          <Route
            path={["/necklaces", "/kjeder", "/halssmykke"]}
            component={Necklaces}
          />
          <Route path={["/rings", "/ringer"]} component={Rings} />
          <Route path={"/profile"} component={Profile} />
          <Route path="*" component={Error} />
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
