import {NewsAgency} from './news-agency';
import {TVChannel} from './observers/tv-channel';
import {RadioStation} from './observers/radio-station';

const agency = new NewsAgency();
const tvp = new TVChannel("TVP Info");
const rmf = new RadioStation("RMF FM");

console.log("--- Observer ---\n")

agency.addObserver(tvp);
agency.addObserver(rmf);
agency.setNews("New tax law!");
