import drawPlot from 'btp-fn-plotter';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import graphConfig from './value.json';
import './style.css'


drawPlot.drawFromData(graphConfig, "#my-plot1");
drawPlot.drawFromData(graphConfig, "#plot3");
