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

export const todayFixtures = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {
          api: {
            results: {
              fixtures: [
                {
                  'fixture_id': 310830,
                  'league_id': 586,
                  'league': {
                    'name': 'Liga Nacional',
                    'country': 'Guatemala',
                    'logo': 'https://media.api-sports.io/football/leagues/339.png',
                    'flag': 'https://media.api-sports.io/flags/gt.svg',
                  },
                  'event_timestamp': 1580947200,
                  'firstHalfStart': 1580947200,
                  'secondHalfStart': 1580950800,
                  'round': 'Clausura - 5',
                  'status': 'Match Expected',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio Armando Barillas (Escuintla)',
                  'referee': 'M. Escobar',
                  'homeTeam': {
                    'team_id': 3666,
                    'team_name': 'Siquinalá',
                    'logo': 'https://media.api-sports.io/football/teams/3666.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 2,
                  'goalsAwayTeam': 1,
                },
                {
                  'fixture_id': 293267,
                  'league_id': 1250,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T00:30:00+00:00',
                  'event_timestamp': 1580949000,
                  'firstHalfStart': 1580949000,
                  'secondHalfStart': 1580952600,
                  'round': '1st Round',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio Atanasio Girardot (Medellín)',
                  'referee': 'Anderson Daronco, Brazil',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 445,
                    'team_name': 'Huracan',
                    'logo': 'https://media.api-sports.io/football/teams/445.png',
                  },
                  'goalsHomeTeam': 3,
                  'goalsAwayTeam': 0,
                },
                {
                  'fixture_id': 313561,
                  'league_id': 875,
                  'league': {
                    'name': 'Copa Do Brasil',
                    'country': 'Brazil',
                    'logo': 'https://media.api-sports.io/football/leagues/73.png',
                    'flag': 'https://media.api-sports.io/flags/br.svg',
                  },
                  'event_date': '2020-02-06T00:30:00+00:00',
                  'event_timestamp': 1580949000,
                  'firstHalfStart': 1580949000,
                  'secondHalfStart': 1580952600,
                  'round': 'Clausura - 5',
                  'status': 'Match Expected',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio Jose Gregorio Martínez (Chalatenango)',
                  'referee': 'W. García',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 0,
                  'goalsAwayTeam': 0,
                },
                {
                  'fixture_id': 315777,
                  'league_id': 1333,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T00:30:00+00:00',
                  'event_timestamp': 1580949000,
                  'firstHalfStart': 1580949000,
                  'secondHalfStart': 1580952600,
                  'round': '1st Round',
                  'status': 'Match Expected',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Arena Pantanal (Cuiabá, Mato Grosso)',
                  'referee': 'Ivan da Silva Guimarães Junior',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 0,
                  'goalsAwayTeam': 0,
                },
                {
                  'fixture_id': 315781,
                  'league_id': 1333,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T00:30:00+00:00',
                  'event_timestamp': 1580949000,
                  'firstHalfStart': 1580949000,
                  'secondHalfStart': 1580952600,
                  'round': '1st Round',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estádio Municipal Nílton Santos (Palmas, Tocantins)',
                  'referee': 'Marco Aurelio Augusto Fazekas Pereira',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 0,
                  'goalsAwayTeam': 2,
                },
                {
                  'fixture_id': 315787,
                  'league_id': 1333,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T00:30:00+00:00',
                  'event_timestamp': 1580949000,
                  'firstHalfStart': 1580949000,
                  'secondHalfStart': 1580952600,
                  'round': '1st Round',
                  'status': 'Match Expected',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estádio Governador Alberto Tavares Silva (Teresina, Piauí)',
                  'referee': 'Jefferson Ferreira de Moraes',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 1,
                  'goalsAwayTeam': 0,
                },
                {
                  'fixture_id': 315788,
                  'league_id': 1333,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T00:30:00+00:00',
                  'event_timestamp': 1580949000,
                  'firstHalfStart': 1580949000,
                  'secondHalfStart': 1580952600,
                  'round': '1st Round',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estádio Francisco Stédile (Caxias do Sul, Rio Grande do Sul)',
                  'referee': 'Lucas Canetto Bellote',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 1,
                  'goalsAwayTeam': 1,
                },
                {
                  'fixture_id': 315790,
                  'league_id': 1333,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T00:30:00+00:00',
                  'event_timestamp': 1580949000,
                  'firstHalfStart': 1580949000,
                  'secondHalfStart': 1580952600,
                  'round': '1st Round',
                  'status': 'Match Expected',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estádio da Noroeste (Aquidauana, Mato Grosso do Sul)',
                  'referee': 'Charly Wendy Straub Deretti',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 0,
                  'goalsAwayTeam': 1,
                },
                {
                  'fixture_id': 315946,
                  'league_id': 1251,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T00:30:00+00:00',
                  'event_timestamp': 1580949000,
                  'firstHalfStart': 1580949000,
                  'secondHalfStart': 1580952600,
                  'round': '2nd Round',
                  'status': 'Match Expected',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio Hernando Siles (La Paz)',
                  'referee': 'G. Guerrero',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 2,
                  'goalsAwayTeam': 0,
                },
                {
                  'fixture_id': 321813,
                  'league_id': 1250,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T00:30:00+00:00',
                  'event_timestamp': 1580949000,
                  'firstHalfStart': 1580949000,
                  'secondHalfStart': 1580952600,
                  'round': '1st Round',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estádio Club de Regatas Vasco da Gama (Rio de Janeiro, Rio de Janeiro)',
                  'referee': 'Augusto Bergelio Aragon Bautista, Ecuador',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 1,
                  'goalsAwayTeam': 0,
                },
                {
                  'fixture_id': 321826,
                  'league_id': 1251,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T00:30:00+00:00',
                  'event_timestamp': 1580949000,
                  'firstHalfStart': 1580949000,
                  'secondHalfStart': 1580952600,
                  'round': '2nd Round',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio General Pablo Rojas (Asunción)',
                  'referee': 'A. Herrera',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 1,
                  'goalsAwayTeam': 0,
                },
                {
                  'fixture_id': 314401,
                  'league_id': 1327,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T00:40:00+00:00',
                  'event_timestamp': 1580949600,
                  'firstHalfStart': 1580949600,
                  'secondHalfStart': 1580953200,
                  'round': 'Apertura - 1',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio Guillermo Plazas Alcid (Neiva)',
                  'referee': 'S. Camargo',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 1,
                  'goalsAwayTeam': 1,
                },
                {
                  'fixture_id': 310829,
                  'league_id': 586,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T01:00:00+00:00',
                  'event_timestamp': 1580950800,
                  'firstHalfStart': 1580950800,
                  'secondHalfStart': 1580954400,
                  'round': 'Clausura - 5',
                  'status': 'Match Expected',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio Verapaz Jose Angel Rossi (Cobán)',
                  'referee': 'B. Castellanos',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 0,
                  'goalsAwayTeam': 2,
                },
                {
                  'fixture_id': 310832,
                  'league_id': 586,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T01:00:00+00:00',
                  'event_timestamp': 1580950800,
                  'firstHalfStart': 1580950800,
                  'secondHalfStart': 1580954400,
                  'round': 'Clausura - 5',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio Santo Domingo (Mixco)',
                  'referee': 'J. Luna',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 5,
                  'goalsAwayTeam': 1,
                },
                {
                  'fixture_id': 313097,
                  'league_id': 588,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T01:00:00+00:00',
                  'event_timestamp': 1580950800,
                  'firstHalfStart': 1580950800,
                  'secondHalfStart': 1580954400,
                  'round': 'Clausura - 7',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio Ebal Rodríguez Aguilar (Guápiles)',
                  'referee': 'B. Pineda',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 5,
                  'goalsAwayTeam': 2,
                },
                {
                  'fixture_id': 320911,
                  'league_id': 785,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T01:00:00+00:00',
                  'event_timestamp': 1580950800,
                  'firstHalfStart': 1580950800,
                  'secondHalfStart': 1580954400,
                  'round': 'Clausura - 3',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio Solidaridad Augusto Cesar Mendoza (Somoto)',
                  'referee': 'R. Hernandez',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 1,
                  'goalsAwayTeam': 2,
                },
                {
                  'fixture_id': 320912,
                  'league_id': 785,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T01:00:00+00:00',
                  'event_timestamp': 1580950800,
                  'firstHalfStart': 1580950800,
                  'secondHalfStart': 1580954400,
                  'round': 'Clausura - 3',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio Roy Fernando Bermúdez (Ocotal)',
                  'referee': 'W. Barrientos',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 0,
                  'goalsAwayTeam': 1,
                },
                {
                  'fixture_id': 320913,
                  'league_id': 785,
                  'league': {
                    'name': 'CONMEBOL Sudamericana',
                    'country': 'World',
                    'logo': 'https://media.api-sports.io/football/leagues/11.png',
                    'flag': null,
                  },
                  'event_date': '2020-02-06T01:00:00+00:00',
                  'event_timestamp': 1580950800,
                  'firstHalfStart': 1580950800,
                  'secondHalfStart': 1580954400,
                  'round': 'Clausura - 3',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Estadio Cacique Diriangén (Diriamba)',
                  'referee': 'N. Sandoval',
                  'homeTeam': {
                    'team_id': 1137,
                    'team_name': 'Atletico Nacional',
                    'logo': 'https://media.api-sports.io/football/teams/1137.png',
                  },
                  'awayTeam': {
                    'team_id': 3662,
                    'team_name': 'Guastatoya',
                    'logo': 'https://media.api-sports.io/football/teams/3662.png',
                  },
                  'goalsHomeTeam': 2,
                  'goalsAwayTeam': 0,
                }
              ]
            }
          }
        }
      )
    }, 1000)
  })
}