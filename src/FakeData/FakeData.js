export const LeagesByCountry = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {
          api: {
            results: {
              leagues: [
                {
                  'league_id': 2,
                  'name': 'Premier League',
                  'type': 'League',
                  'country': 'England',
                  'country_code': 'GB',
                  'season': 2018,
                  'season_start': '2018-08-10',
                  'season_end': '2019-05-12',
                  'logo': 'https://media.api-football.com/leagues/2.png',
                  'flag': 'https://media.api-football.com/flags/gb.svg',
                  'standings': 1,
                  'is_current': 0,
                },
                {
                  'league_id': 3,
                  'name': 'Championship',
                  'type': 'League',
                  'country': 'England',
                  'country_code': 'GB',
                  'season': 2018,
                  'season_start': '2018-08-03',
                  'season_end': '2019-05-27',
                  'logo': 'https://media.api-football.com/leagues/3.png',
                  'flag': 'https://media.api-football.com/flags/gb.svg',
                  'standings': 1,
                  'is_current': 0,
                },
                {
                  'league_id': 164,
                  'name': 'League One',
                  'type': 'League',
                  'country': 'England',
                  'country_code': 'GB',
                  'season': 2018,
                  'season_start': '2018-08-04',
                  'season_end': '2019-05-26',
                  'logo': 'https://media.api-football.com/leagues/164.png',
                  'flag': 'https://media.api-football.com/flags/gb.svg',
                  'standings': 1,
                  'is_current': 0,
                },
                {
                  'league_id': 167,
                  'name': 'League Two',
                  'type': 'League',
                  'country': 'England',
                  'country_code': 'GB',
                  'season': 2018,
                  'season_start': '2018-08-04',
                  'season_end': '2019-05-25',
                  'logo': 'https://media.api-football.com/leagues/167.png',
                  'flag': 'https://media.api-football.com/flags/gb.svg',
                  'standings': 1,
                  'is_current': 0,
                },
                {
                  'league_id': 222,
                  'name': 'National League',
                  'type': 'League',
                  'country': 'England',
                  'country_code': 'GB',
                  'season': 2018,
                  'season_start': '2018-08-04',
                  'season_end': '2019-04-27',
                  'logo': 'https://media.api-football.com/leagues/222.png',
                  'flag': 'https://media.api-football.com/flags/gb.svg',
                  'standings': 1,
                  'is_current': 0,
                },
                {
                  'league_id': 225,
                  'name': 'FA WSL',
                  'type': 'League',
                  'country': 'England',
                  'country_code': 'GB',
                  'season': 2018,
                  'season_start': '2018-09-09',
                  'season_end': '2019-05-11',
                  'logo': 'https://media.api-football.com/leagues/225.jpg',
                  'flag': 'https://media.api-football.com/flags/gb.svg',
                  'standings': 1,
                  'is_current': 0,
                }
              ]
            }
          }
        }
      )
    }, 1000)
  })
}

