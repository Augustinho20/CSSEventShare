import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import * as serviceWorker from './serviceWorker';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import AprovarEventos from './pages/AprovarEventosAdm';
import Cadastro from './pages/Cadastro';
import Categoria from './pages/Categoria';
import CriarEvento1 from './pages/CriarEvento1';
import CriarEvento2 from './pages/CriarEvento2';
import CriarEvento3 from './pages/CriarEvento3';
import CriarEvento4 from './pages/CriarEvento4';
import CriarEvento5 from './pages/CriarEvento5';
import CriarEvento6 from './pages/CriarEvento6';
import DescricaoEvento from './pages/DescricaoEvento';
import DescricaoEventoAdm from './pages/DescriçãoEventoAdm';
import EditarEventoAdm from './pages/EditarEventoAdm';
import EditarEventoPerfilUsuario from './pages/EditarEventoPerfilUsuario';
import EditarPerfilUsuario from './pages/EditarPerfilUsuario';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PainelEventos from './pages/PainelEventos';
import PerfilAdmAprovarEvento from './pages/PerfilAdmAprovarEventos';
import { usuarioAutenticado, parseJwt } from './services/auth';



const PermissaoAdm = ({ component: Component }) => (
    <Route
        render={props =>
            usuarioAutenticado() && parseJwt().Role === 'Administrador' ? (
                <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/PerfilAdmAprovarEventos' }} />
                )
        }
    /> 
)


const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <PermissaoAdm path='/AprovarEventos' component={AprovarEventos} />
                <Route path='/Cadastro' component={Cadastro} />
                <Route path='/Categorias' component={Categoria} />
                <Route path='/CriarEvento' component={CriarEvento1} />
                <Route path='/CriarEvento2' component={CriarEvento2} />
                <Route path='/CriarEvento3' component={CriarEvento3} />
                <Route path='/CriarEvento4' component={CriarEvento4} />
                <Route path='/CriarEvento5' component={CriarEvento5} />
                <Route path='/CriarEvento6' component={CriarEvento6} />
                <Route path='/DescricaoEvento/:id' component={DescricaoEvento} />
                <Route path='/DescricaoEventoAdm' component={DescricaoEventoAdm} />
                <PermissaoAdm path='/EditarEventoAdm' component={EditarEventoAdm} />
                <Route path='/EditarEventoUsuario' component={EditarEventoPerfilUsuario} />
                <Route path='/EditarPerfilUsuario' component={EditarPerfilUsuario} />
                <Route path='/FAQ' component={FAQ} />
                <Route path='/Login' component={Login} />
                <Route path='/PerfilUsuario' component={PainelEventos} />
                <PermissaoAdm path='/PerfilAdmAprovarEventos' component={PerfilAdmAprovarEvento} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
