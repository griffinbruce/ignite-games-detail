import moment from 'moment';

require('dotenv').config();

//Base URL
const base_url = 'https://api.rawg.io/api/';
const api_key = process.env.REACT_APP_KEY;

// //Getting the date
// const getCurrentMonth = () => {
//   const month = new Date().getMonth() + 1;
//   if (month < 10) {
//     return `0${month}`;
//   } else {
//     return month;
//   }
// };

// const getCurrentDay = () => {
//   const day = new Date().getDate();
//   if (day < 10) {
//     return `0${day}`;
//   } else {
//     return day;
//   }
// };

//Current Day/Month/Year
// const currentYear = new Date().getFullYear();
// const currentMonth = getCurrentMonth();
// const currentDay = getCurrentDay();
// const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Consolidate getting dates using moment package
const currentDate = `${moment().format('YYYY-MM-DD')}`;
const lastYear = `${moment().subtract(1, 'year').format('YYYY-MM-DD')}`;
const nextYear = `${moment().add(1, 'year').format('YYYY-MM-DD')}`;

//Popular Games
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
//Upcoming Games
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
//New Games
const newGames = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${api_key}`;

//Game Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${api_key}`;

//Searched Game
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${api_key}&search=${game_name}&page_size=9`;
