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
                  'status': 'Not Started',
                  'statusShort': 'NS',
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
                  'status': 'Not Started',
                  'statusShort': 'NS',
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
                  'status': 'Match Finished',
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
                  'status': 'Not Started',
                  'statusShort': 'NS',
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
                  'status': 'Not Started',
                  'statusShort': 'NS',
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
                  'status': 'Match Finished',
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
                  'status': 'Not Started',
                  'statusShort': 'NS',
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
                  'event_date': '2020-02-06T000:00+00:00',
                  'event_timestamp': 1580950800,
                  'firstHalfStart': 1580950800,
                  'secondHalfStart': 1580954400,
                  'round': 'Clausura - 5',
                  'status': 'Match Finished',
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
                  'event_date': '2020-02-06T000:00+00:00',
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
                  'event_date': '2020-02-06T000:00+00:00',
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
                  'event_date': '2020-02-06T000:00+00:00',
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
                  'event_date': '2020-02-06T000:00+00:00',
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
                  'event_date': '2020-02-06T000:00+00:00',
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

export const leagueStatnding = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {
          api: {
            results: {
              standings: [
                {
                  'rank': 1,
                  'team_id': 40,
                  'teamName': 'Liverpool',
                  'logo': 'https://media.api-sports.io/football/teams/40.png',
                  'group': 'Premier League',
                  'forme': 'WLWWW',
                  'status': 'same',
                  'description': 'Promotion - Champions League (Group Stage)',
                  'all': {
                    'matchsPlayed': 29,
                    'win': 27,
                    'draw': 1,
                    'lose': 1,
                    'goalsFor': 66,
                    'goalsAgainst': 21,
                  },
                  'home': {
                    'matchsPlayed': 15,
                    'win': 15,
                    'draw': 0,
                    'lose': 0,
                    'goalsFor': 40,
                    'goalsAgainst': 12,
                  },
                  'away': {
                    'matchsPlayed': 14,
                    'win': 12,
                    'draw': 1,
                    'lose': 1,
                    'goalsFor': 26,
                    'goalsAgainst': 9,
                  },
                  'goalsDiff': 45,
                  'points': 82,
                  'lastUpdate': '2020-04-06',
                },
                {
                  'rank': 2,
                  'team_id': 50,
                  'teamName': 'Manchester City',
                  'logo': 'https://media.api-sports.io/football/teams/50.png',
                  'group': 'Premier League',
                  'forme': 'LWWLW',
                  'status': 'same',
                  'description': 'Promotion - Champions League (Group Stage)',
                  'all': {
                    'matchsPlayed': 28,
                    'win': 18,
                    'draw': 3,
                    'lose': 7,
                    'goalsFor': 68,
                    'goalsAgainst': 31,
                  },
                  'home': {
                    'matchsPlayed': 13,
                    'win': 9,
                    'draw': 2,
                    'lose': 2,
                    'goalsFor': 33,
                    'goalsAgainst': 12,
                  },
                  'away': {
                    'matchsPlayed': 15,
                    'win': 9,
                    'draw': 1,
                    'lose': 5,
                    'goalsFor': 35,
                    'goalsAgainst': 19,
                  },
                  'goalsDiff': 37,
                  'points': 57,
                  'lastUpdate': '2020-04-06',
                },
                {
                  'rank': 3,
                  'team_id': 46,
                  'teamName': 'Leicester',
                  'logo': 'https://media.api-sports.io/football/teams/46.png',
                  'group': 'Premier League',
                  'forme': 'WLLDD',
                  'status': 'same',
                  'description': 'Promotion - Champions League (Group Stage)',
                  'all': {
                    'matchsPlayed': 29,
                    'win': 16,
                    'draw': 5,
                    'lose': 8,
                    'goalsFor': 58,
                    'goalsAgainst': 28,
                  },
                  'home': {
                    'matchsPlayed': 15,
                    'win': 9,
                    'draw': 3,
                    'lose': 3,
                    'goalsFor': 30,
                    'goalsAgainst': 15,
                  },
                  'away': {
                    'matchsPlayed': 14,
                    'win': 7,
                    'draw': 2,
                    'lose': 5,
                    'goalsFor': 28,
                    'goalsAgainst': 13,
                  },
                  'goalsDiff': 30,
                  'points': 53,
                  'lastUpdate': '2020-04-06',
                },
                {
                  'rank': 4,
                  'team_id': 49,
                  'teamName': 'Chelsea',
                  'logo': 'https://media.api-sports.io/football/teams/49.png',
                  'group': 'Premier League',
                  'forme': 'WDWLD',
                  'status': 'same',
                  'description': 'Promotion - Champions League (Group Stage)',
                  'all': {
                    'matchsPlayed': 29,
                    'win': 14,
                    'draw': 6,
                    'lose': 9,
                    'goalsFor': 51,
                    'goalsAgainst': 39,
                  },
                  'home': {
                    'matchsPlayed': 15,
                    'win': 7,
                    'draw': 3,
                    'lose': 5,
                    'goalsFor': 22,
                    'goalsAgainst': 15,
                  },
                  'away': {
                    'matchsPlayed': 14,
                    'win': 7,
                    'draw': 3,
                    'lose': 4,
                    'goalsFor': 29,
                    'goalsAgainst': 24,
                  },
                  'goalsDiff': 12,
                  'points': 48,
                  'lastUpdate': '2020-04-06',
                },
                {
                  'rank': 5,
                  'team_id': 33,
                  'teamName': 'Manchester United',
                  'logo': 'https://media.api-sports.io/football/teams/33.png',
                  'group': 'Premier League',
                  'forme': 'WDWWD',
                  'status': 'same',
                  'description': 'Promotion - Europa League (Group Stage)',
                  'all': {
                    'matchsPlayed': 29,
                    'win': 12,
                    'draw': 9,
                    'lose': 8,
                    'goalsFor': 44,
                    'goalsAgainst': 30,
                  },
                  'home': {
                    'matchsPlayed': 15,
                    'win': 8,
                    'draw': 5,
                    'lose': 2,
                    'goalsFor': 29,
                    'goalsAgainst': 12,
                  },
                  'away': {
                    'matchsPlayed': 14,
                    'win': 4,
                    'draw': 4,
                    'lose': 6,
                    'goalsFor': 15,
                    'goalsAgainst': 18,
                  },
                  'goalsDiff': 14,
                  'points': 45,
                  'lastUpdate': '2020-04-06',
                },
                {
                  'rank': 6,
                  'team_id': 39,
                  'teamName': 'Wolves',
                  'logo': 'https://media.api-sports.io/football/teams/39.png',
                  'group': 'Premier League',
                  'forme': 'DWWDD',
                  'status': 'same',
                  'description': null,
                  'all': {
                    'matchsPlayed': 29,
                    'win': 10,
                    'draw': 13,
                    'lose': 6,
                    'goalsFor': 41,
                    'goalsAgainst': 34,
                  },
                  'home': {
                    'matchsPlayed': 15,
                    'win': 5,
                    'draw': 7,
                    'lose': 3,
                    'goalsFor': 21,
                    'goalsAgainst': 17,
                  },
                  'away': {
                    'matchsPlayed': 14,
                    'win': 5,
                    'draw': 6,
                    'lose': 3,
                    'goalsFor': 20,
                    'goalsAgainst': 17,
                  },
                  'goalsDiff': 7,
                  'points': 43,
                  'lastUpdate': '2020-04-06',
                },
                {
                  'rank': 7,
                  'team_id': 62,
                  'teamName': 'Sheffield Utd',
                  'logo': 'https://media.api-sports.io/football/teams/62.png',
                  'group': 'Premier League',
                  'forme': 'WDWWL',
                  'status': 'same',
                  'description': null,
                  'all': {
                    'matchsPlayed': 28,
                    'win': 11,
                    'draw': 10,
                    'lose': 7,
                    'goalsFor': 30,
                    'goalsAgainst': 25,
                  },
                  'home': {
                    'matchsPlayed': 15,
                    'win': 7,
                    'draw': 3,
                    'lose': 5,
                    'goalsFor': 17,
                    'goalsAgainst': 13,
                  },
                  'away': {
                    'matchsPlayed': 13,
                    'win': 4,
                    'draw': 7,
                    'lose': 2,
                    'goalsFor': 13,
                    'goalsAgainst': 12,
                  },
                  'goalsDiff': 5,
                  'points': 43,
                  'lastUpdate': '2020-04-06',
                },
                {
                  'rank': 8,
                  'team_id': 47,
                  'teamName': 'Tottenham',
                  'logo': 'https://media.api-sports.io/football/teams/47.png',
                  'group': 'Premier League',
                  'forme': 'DLLWW',
                  'status': 'same',
                  'description': null,
                  'all': {
                    'matchsPlayed': 29,
                    'win': 11,
                    'draw': 8,
                    'lose': 10,
                    'goalsFor': 47,
                    'goalsAgainst': 40,
                  },
                  'home': {
                    'matchsPlayed': 14,
                    'win': 8,
                    'draw': 2,
                    'lose': 4,
                    'goalsFor': 27,
                    'goalsAgainst': 15,
                  },
                  'away': {
                    'matchsPlayed': 15,
                    'win': 3,
                    'draw': 6,
                    'lose': 6,
                    'goalsFor': 20,
                    'goalsAgainst': 25,
                  },
                  'goalsDiff': 7,
                  'points': 41,
                  'lastUpdate': '2020-04-06',
                },
                {
                  'rank': 9,
                  'team_id': 42,
                  'teamName': 'Arsenal',
                  'logo': 'https://media.api-sports.io/football/teams/42.png',
                  'group': 'Premier League',
                  'forme': 'WWWDD',
                  'status': 'same',
                  'description': null,
                  'all': {
                    'matchsPlayed': 28,
                    'win': 9,
                    'draw': 13,
                    'lose': 6,
                    'goalsFor': 40,
                    'goalsAgainst': 36,
                  },
                  'home': {
                    'matchsPlayed': 15,
                    'win': 7,
                    'draw': 5,
                    'lose': 3,
                    'goalsFor': 26,
                    'goalsAgainst': 20,
                  },
                  'away': {
                    'matchsPlayed': 13,
                    'win': 2,
                    'draw': 8,
                    'lose': 3,
                    'goalsFor': 14,
                    'goalsAgainst': 16,
                  },
                  'goalsDiff': 4,
                  'points': 40,
                  'lastUpdate': '2020-04-06',
                }
              ]
            }
          }
        }
      )
    }, 1000)
  })
}

export const topScorers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {
          api: {
            results: {
              topscorers: [
                {
                  'player_id': 278,
                  'player_name': 'K. Mbappé',
                  'firstname': 'Kylian',
                  'lastname': 'Mbappé Lottin',
                  'position': 'Attacker',
                  'nationality': 'France',
                  'team_id': 85,
                  'team_name': 'Paris Saint Germain',
                  'games': {
                    'appearences': 29,
                    'minutes_played': 2340,
                  },
                  'goals': {
                    'total': 33,
                    'assists': 7,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 132,
                    'on': 88
                  },
                },
                {
                  'player_id': 3246,
                  'player_name': 'N. Pépé',
                  'firstname': 'Nicolas',
                  'lastname': 'Pépé',
                  'position': 'Attacker',
                  'nationality': 'Côte d\'Ivoire',
                  'team_id': 79,
                  'team_name': 'Lille',
                  'games': {
                    'appearences': 38,
                    'minutes_played': 3332,
                  },
                  'goals': {
                    'total': 22,
                    'assists': 11,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 132,
                    'on': 83
                  },
                },
                {
                  'player_id': 274,
                  'player_name': 'E. Cavani',
                  'firstname': 'Edinson Roberto',
                  'lastname': 'Cavani Gómez',
                  'position': 'Attacker',
                  'nationality': 'Uruguay',
                  'team_id': 85,
                  'team_name': 'Paris Saint Germain',
                  'games': {
                    'appearences': 21,
                    'minutes_played': 1676,
                  },
                  'goals': {
                    'total': 18,
                    'assists': 5,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 92,
                    'on': 58
                  },
                },
                {
                  'player_id': 1922,
                  'player_name': 'F. Thauvin',
                  'firstname': 'Florian',
                  'lastname': 'Thauvin',
                  'position': 'Midfielder',
                  'nationality': 'France',
                  'team_id': 81,
                  'team_name': 'Marseille',
                  'games': {
                    'appearences': 33,
                    'minutes_played': 2624,
                  },
                  'goals': {
                    'total': 16,
                    'assists': 8,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 72,
                    'on': 38
                  },
                },
                {
                  'player_id': 666,
                  'player_name': 'M. Dembélé',
                  'firstname': 'Moussa',
                  'lastname': 'Dembélé',
                  'position': 'Attacker',
                  'nationality': 'France',
                  'team_id': 80,
                  'team_name': 'Lyon',
                  'games': {
                    'appearences': 33,
                    'minutes_played': 2013,
                  },
                  'goals': {
                    'total': 15,
                    'assists': 4,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 112,
                    'on': 81
                  },
                },
                {
                  'player_id': 119,
                  'player_name': 'R. Falcao',
                  'firstname': 'Radamel Falcao',
                  'lastname': 'García Zárate',
                  'position': 'Attacker',
                  'nationality': 'Colombia',
                  'team_id': 91,
                  'team_name': 'Monaco',
                  'games': {
                    'appearences': 33,
                    'minutes_played': 2564,
                  },
                  'goals': {
                    'total': 15,
                    'assists': 2,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 122,
                    'on': 68
                  },
                },
                {
                  'player_id': 276,
                  'player_name': 'Neymar',
                  'firstname': 'Neymar',
                  'lastname': 'da Silva Santos Junior',
                  'position': 'Attacker',
                  'nationality': 'Brazil',
                  'team_id': 85,
                  'team_name': 'Paris Saint Germain',
                  'games': {
                    'appearences': 17,
                    'minutes_played': 1443,
                  },
                  'goals': {
                    'total': 15,
                    'assists': 7,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 122,
                    'on': 68
                  },
                },
                {
                  'player_id': 21591,
                  'player_name': 'A. Delort',
                  'firstname': 'Andy',
                  'lastname': 'Delort',
                  'position': 'Attacker',
                  'nationality': 'Algeria',
                  'team_id': 82,
                  'team_name': 'Montpellier',
                  'games': {
                    'appearences': 36,
                    'minutes_played': 3132,
                  },
                  'goals': {
                    'total': 14,
                    'assists': 6,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 122,
                    'on': 68
                  },
                },
                {
                  'player_id': 22235,
                  'player_name': 'J. Bamba',
                  'firstname': 'Jonathan',
                  'lastname': 'Bamba',
                  'position': 'Attacker',
                  'nationality': 'France',
                  'team_id': 79,
                  'team_name': 'Lille',
                  'games': {
                    'appearences': 38,
                    'minutes_played': 3011,
                  },
                  'goals': {
                    'total': 13,
                    'assists': 3,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 122,
                    'on': 68
                  },
                },
                {
                  'player_id': 22102,
                  'player_name': 'W. Khazri',
                  'firstname': 'Wahbi',
                  'lastname': 'Khazri',
                  'position': 'Attacker',
                  'nationality': 'Tunisia',
                  'team_id': 1063,
                  'team_name': 'Saint Etienne',
                  'games': {
                    'appearences': 32,
                    'minutes_played': 2825,
                  },
                  'goals': {
                    'total': 13,
                    'assists': 6,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 122,
                    'on': 68
                  },
                },
                {
                  'player_id': 266,
                  'player_name': 'Á. Di María',
                  'firstname': 'Ángel Fabián',
                  'lastname': 'Di María Hernández',
                  'position': 'Midfielder',
                  'nationality': 'Argentina',
                  'team_id': 85,
                  'team_name': 'Paris Saint Germain',
                  'games': {
                    'appearences': 30,
                    'minutes_played': 2339,
                  },
                  'goals': {
                    'total': 12,
                    'assists': 10,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 122,
                    'on': 68
                  },
                },
                {
                  'player_id': 84054,
                  'player_name': 'E. Sala',
                  'firstname': 'Emiliano',
                  'lastname': 'Sala',
                  'position': 'Attacker',
                  'nationality': 'Argentina',
                  'team_id': 83,
                  'team_name': 'Nantes',
                  'games': {
                    'appearences': 19,
                    'minutes_played': 1376,
                  },
                  'goals': {
                    'total': 12,
                    'assists': 2,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 122,
                    'on': 68
                  },
                },
                {
                  'player_id': 21592,
                  'player_name': 'G. Laborde',
                  'firstname': 'Gaëtan',
                  'lastname': 'Laborde',
                  'position': 'Attacker',
                  'nationality': 'France',
                  'team_id': 82,
                  'team_name': 'Montpellier',
                  'games': {
                    'appearences': 36,
                    'minutes_played': 2916,
                  },
                  'goals': {
                    'total': 11,
                    'assists': null,
                    'conceded': null,
                  },
                  'shots': {
                    'total': 122,
                    'on': 68
                  },
                }
              ]
            }
          }
        }
      )
    }, 1000)
  })
}

export const leagueRounds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {
          api: {
            results: {
              fixtures: [
                'Regular_Season_-_1',
                'Regular_Season_-_2',
                'Regular_Season_-_3',
                'Regular_Season_-_4',
                'Regular_Season_-_5',
                'Regular_Season_-_6',
                'Regular_Season_-_7',
                'Regular_Season_-_8',
                'Regular_Season_-_9',
                'Regular_Season_-_10',
                'Regular_Season_-_11',
                'Regular_Season_-_12',
                'Regular_Season_-_13',
                'Regular_Season_-_14',
                'Regular_Season_-_15',
                'Regular_Season_-_16',
                'Regular_Season_-_17',
              ]
            }
          }
        }
      )
    }, 1000)
  })
}

export const fetchFixture = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {
          api: {
            results: {
              fixtures: [
                {
                  'fixture_id': 157508,
                  'league_id': 525,
                  'league': {
                    'name': 'Ligue 1',
                    'country': 'France',
                    'logo': 'https://media.api-sports.io/football/leagues/61.png',
                    'flag': 'https://media.api-sports.io/flags/fr.svg',
                  },
                  'event_date': '2019-10-20T100:00+000',
                  'event_timestamp': 1571576400,
                  'firstHalfStart': 1571576400,
                  'secondHalfStart': 1571580000,
                  'round': 'Regular Season - 10',
                  'status': 'Match Finished',
                  'statusShort': 'FT',
                  'elapsed': 90,
                  'venue': 'Stade Matmut-Atlantique (Bordeaux)',
                  'referee': 'R. Buquet',
                  'homeTeam': {
                    'team_id': 78,
                    'team_name': 'Bordeaux',
                    'logo': 'https://media.api-sports.io/football/teams/78.png',
                  },
                  'awayTeam': {
                    'team_id': 1063,
                    'team_name': 'Saint Etienne',
                    'logo': 'https://media.api-sports.io/football/teams/1063.png',
                  },
                  'goalsHomeTeam': 0,
                  'goalsAwayTeam': 1,
                  'score': {
                    'halftime': '0-0',
                    'fulltime': '0-1',
                    'extratime': null,
                    'penalty': null,
                  },
                  'events': [
                    {
                      'elapsed': 19,
                      'elapsed_plus': null,
                      'team_id': 1063,
                      'teamName': 'Saint Etienne',
                      'player_id': 22088,
                      'player': 'Loïc Perrin',
                      'assist_id': null,
                      'assist': null,
                      'type': 'Card',
                      'detail': 'Yellow Card',
                      'comments': null,
                    },
                    {
                      'elapsed': 24,
                      'elapsed_plus': null,
                      'team_id': 78,
                      'teamName': 'Bordeaux',
                      'player_id': 1443,
                      'player': 'L. Koscielny',
                      'assist_id': 1256,
                      'assist': 'V. Jovanović',
                      'type': 'subst',
                      'detail': 'V. Jovanović',
                      'comments': null,
                    },
                    {
                      'elapsed': 28,
                      'elapsed_plus': null,
                      'team_id': 1063,
                      'teamName': 'Saint Etienne',
                      'player_id': 22094,
                      'player': 'Wesley Fofana',
                      'assist_id': null,
                      'assist': null,
                      'type': 'Card',
                      'detail': 'Yellow Card',
                      'comments': null,
                    },
                    {
                      'elapsed': 32,
                      'elapsed_plus': null,
                      'team_id': 1063,
                      'teamName': 'Saint Etienne',
                      'player_id': 22102,
                      'player': 'Wahbi Khazri',
                      'assist_id': null,
                      'assist': null,
                      'type': 'Card',
                      'detail': 'Yellow Card',
                      'comments': null,
                    },
                    {
                      'elapsed': 46,
                      'elapsed_plus': null,
                      'team_id': 1063,
                      'teamName': 'Saint Etienne',
                      'player_id': 22088,
                      'player': 'L. Perrin',
                      'assist_id': 22086,
                      'assist': 'T. Kolodziejczak',
                      'type': 'subst',
                      'detail': 'T. Kolodziejczak',
                      'comments': null,
                    },
                    {
                      'elapsed': 55,
                      'elapsed_plus': null,
                      'team_id': 78,
                      'teamName': 'Bordeaux',
                      'player_id': 1276,
                      'player': 'S. Kalu',
                      'assist_id': 2910,
                      'assist': 'Hwang Ui-jo',
                      'type': 'subst',
                      'detail': 'Hwang Ui-jo',
                      'comments': null,
                    },
                    {
                      'elapsed': 77,
                      'elapsed_plus': null,
                      'team_id': 1063,
                      'teamName': 'Saint Etienne',
                      'player_id': 22102,
                      'player': 'W. Khazri',
                      'assist_id': 90488,
                      'assist': 'Y. Cabaye',
                      'type': 'subst',
                      'detail': 'Y. Cabaye',
                      'comments': null,
                    },
                    {
                      'elapsed': 84,
                      'elapsed_plus': null,
                      'team_id': 1063,
                      'teamName': 'Saint Etienne',
                      'player_id': 47436,
                      'player': 'R. Boudebouz',
                      'assist_id': 22097,
                      'assist': 'A. Nordin',
                      'type': 'subst',
                      'detail': 'A. Nordin',
                      'comments': null,
                    },
                    {
                      'elapsed': 84,
                      'elapsed_plus': null,
                      'team_id': 78,
                      'teamName': 'Bordeaux',
                      'player_id': 2709,
                      'player': 'Y. Aït Bennasser',
                      'assist_id': 1279,
                      'assist': 'J. Maja',
                      'type': 'subst',
                      'detail': 'J. Maja',
                      'comments': null,
                    },
                    {
                      'elapsed': 90,
                      'elapsed_plus': 3,
                      'team_id': 1063,
                      'teamName': 'Saint Etienne',
                      'player_id': 21437,
                      'player': 'Denis Bouanga',
                      'assist_id': null,
                      'assist': null,
                      'type': 'Goal',
                      'detail': 'Penalty',
                      'comments': null,
                    },
                    {
                      'elapsed': 35,
                      'elapsed_plus': 3,
                      'team_id': 78,
                      'teamName': 'Bordeaux',
                      'player_id': 21437,
                      'player': 'Y. Aït Bennasser',
                      'assist_id': null,
                      'assist': null,
                      'type': 'Goal',
                      'detail': 'Penalty',
                      'comments': null,
                    },
                    {
                      'elapsed': 48,
                      'elapsed_plus': 3,
                      'team_id': 78,
                      'teamName': 'Bordeaux',
                      'player_id': 21437,
                      'player': 'Y. Aït Bennasser',
                      'assist_id': null,
                      'assist': null,
                      'type': 'Goal',
                      'detail': 'Penalty',
                      'comments': null,
                    },
                  ],
                  'lineups': {
                    'Bordeaux': {
                      'coach': 'Paulo Sousa',
                      'coach_id': 33,
                      'formation': '3-4-2-1',
                      'startXI': [
                        {
                          'team_id': 78,
                          'player_id': 1253,
                          'player': 'B. Costil',
                          'number': 1,
                          'pos': 'G',
                        },
                        {
                          'team_id': 78,
                          'player_id': 1443,
                          'player': 'L. Koscielny',
                          'number': 6,
                          'pos': 'D',
                        },
                        {
                          'team_id': 78,
                          'player_id': 2201,
                          'player': 'Mexer',
                          'number': 4,
                          'pos': 'D',
                        },
                        {
                          'team_id': 78,
                          'player_id': 941,
                          'player': 'L. Benito',
                          'number': 23,
                          'pos': 'M',
                        },
                        {
                          'team_id': 78,
                          'player_id': 1260,
                          'player': 'Pablo',
                          'number': 3,
                          'pos': 'D',
                        },
                        {
                          'team_id': 78,
                          'player_id': 1262,
                          'player': 'Otávio',
                          'number': 5,
                          'pos': 'M',
                        },
                        {
                          'team_id': 78,
                          'player_id': 2709,
                          'player': 'Y. Aït Bennasser',
                          'number': 17,
                          'pos': 'M',
                        },
                        {
                          'team_id': 78,
                          'player_id': 1265,
                          'player': 'Y. Adli',
                          'number': 19,
                          'pos': 'F',
                        },
                        {
                          'team_id': 78,
                          'player_id': 1273,
                          'player': 'J. Briand',
                          'number': 7,
                          'pos': 'F',
                        },
                        {
                          'team_id': 78,
                          'player_id': 1277,
                          'player': 'F. Kamano',
                          'number': 11,
                          'pos': 'M',
                        },
                        {
                          'team_id': 78,
                          'player_id': 1276,
                          'player': 'S. Kalu',
                          'number': 10,
                          'pos': 'F',
                        },
                      ],
                      'substitutes': [
                        {
                          'team_id': 78,
                          'player_id': 1256,
                          'player': 'V. Jovanović',
                          'number': 14,
                          'pos': 'D',
                        },
                        {
                          'team_id': 78,
                          'player_id': 2910,
                          'player': 'Hwang Ui-jo',
                          'number': 18,
                          'pos': 'F',
                        },
                        {
                          'team_id': 78,
                          'player_id': 1279,
                          'player': 'J. Maja',
                          'number': 9,
                          'pos': 'F',
                        },
                        {
                          'team_id': 78,
                          'player_id': 1254,
                          'player': 'G. Poussin',
                          'number': 16,
                          'pos': 'G',
                        },
                        {
                          'team_id': 78,
                          'player_id': 1271,
                          'player': 'A. Tchouaméni',
                          'number': 8,
                          'pos': 'M',
                        },
                        {
                          'team_id': 78,
                          'player_id': 21086,
                          'player': 'E. Kwateng',
                          'number': 25,
                          'pos': 'D',
                        },
                        {
                          'team_id': 78,
                          'player_id': 91422,
                          'player': 'R. Bellanova',
                          'number': 2,
                          'pos': 'D',
                        },
                      ],
                    },
                    'Saint Etienne': {
                      'coach': 'C. Puel',
                      'coach_id': 43,
                      'formation': '3-4-2-1',
                      'startXI': [
                        {
                          'team_id': 1063,
                          'player_id': 22083,
                          'player': 'S. Ruffier',
                          'number': 16,
                          'pos': 'G',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 22088,
                          'player': 'L. Perrin',
                          'number': 24,
                          'pos': 'D',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 1261,
                          'player': 'Sergi Palencia',
                          'number': 23,
                          'pos': 'M',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 22094,
                          'player': 'W. Fofana',
                          'number': 32,
                          'pos': 'D',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 22090,
                          'player': 'W. Saliba',
                          'number': 4,
                          'pos': 'D',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 22096,
                          'player': 'Y. M\'Vila',
                          'number': 6,
                          'pos': 'M',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 47436,
                          'player': 'R. Boudebouz',
                          'number': 7,
                          'pos': 'F',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 21437,
                          'player': 'Denis Bouanga',
                          'number': 20,
                          'pos': 'M',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 1272,
                          'player': 'Z. Youssouf',
                          'number': 28,
                          'pos': 'M',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 22102,
                          'player': 'W. Khazri',
                          'number': 10,
                          'pos': 'F',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 67785,
                          'player': 'C. Abi',
                          'number': 31,
                          'pos': 'F',
                        },
                      ],
                      'substitutes': [
                        {
                          'team_id': 1063,
                          'player_id': 22086,
                          'player': 'T. Kolodziejczak',
                          'number': 5,
                          'pos': 'D',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 90488,
                          'player': 'Y. Cabaye',
                          'number': 29,
                          'pos': 'M',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 22097,
                          'player': 'A. Nordin',
                          'number': 18,
                          'pos': 'M',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 22095,
                          'player': 'R. Hamouma',
                          'number': 21,
                          'pos': 'M',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 22099,
                          'player': 'R. Berič',
                          'number': 27,
                          'pos': 'F',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 22085,
                          'player': 'M. Debuchy',
                          'number': 26,
                          'pos': 'D',
                        },
                        {
                          'team_id': 1063,
                          'player_id': 22082,
                          'player': 'J. Moulin',
                          'number': 30,
                          'pos': 'G',
                        },
                      ],
                    },
                  },
                  'statistics': {
                    'Shots on Goal': {
                      'home': '6',
                      'away': '3',
                    },
                    'Shots off Goal': {
                      'home': '6',
                      'away': '2',
                    },
                    'Total Shots': {
                      'home': '12',
                      'away': '6',
                    },
                    'Blocked Shots': {
                      'home': '0',
                      'away': '1',
                    },
                    'Shots insidebox': {
                      'home': '7',
                      'away': '1',
                    },
                    'Shots outsidebox': {
                      'home': '5',
                      'away': '5',
                    },
                    'Fouls': {
                      'home': '7',
                      'away': '18',
                    },
                    'Corner Kicks': {
                      'home': '8',
                      'away': '5',
                    },
                    'Offsides': {
                      'home': '3',
                      'away': '1',
                    },
                    'Ball Possession': {
                      'home': '63%',
                      'away': '37%',
                    },
                    'Yellow Cards': {
                      'home': '0',
                      'away': '3',
                    },
                    'Red Cards': {
                      'home': null,
                      'away': null,
                    },
                    'Goalkeeper Saves': {
                      'home': '2',
                      'away': '7',
                    },
                    'Total passes': {
                      'home': '599',
                      'away': '348',
                    },
                    'Passes accurate': {
                      'home': '500',
                      'away': '245',
                    },
                    'Passes %': {
                      'home': '83%',
                      'away': '70%',
                    },
                  },
                  'players': [
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1253,
                      'player_name': 'Benoît Costil',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 1,
                      'position': 'G',
                      'rating': '6.6',
                      'minutes_played': 90,
                      'captain': 'True',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {
                        'tota': 0,
                        'on': 0,
                      },
                      'goals': {
                        'total': 0,
                        'conceded': 1,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 18,
                        'key': 0,
                        'accuracy': 69,
                      },
                      'tackles': {

                        'total': 0,
                        'blocks': 0,
                        'interceptions': 0,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 1,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 2201,
                      'player_name': 'Edson Mexer',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 4,
                      'position': 'D',
                      'rating': '6.5',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 65,
                        'key': 0,
                        'accuracy': 80,
                      },
                      'tackles': {

                        'total': 2,
                        'blocks': 1,
                        'interceptions': 1,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 2,
                        'success': 0,
                        'past': 1,
                      },
                      'fouls': {

                        'drawn': 2,
                        'committed': 1,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1443,
                      'player_name': 'Laurent Koscielny',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 6,
                      'position': 'D',
                      'rating': '6.8',
                      'minutes_played': 24,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 29,
                        'key': 0,
                        'accuracy': 96,
                      },
                      'tackles': {

                        'total': 0,
                        'blocks': 0,
                        'interceptions': 2,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1260,
                      'player_name': 'Pablo Nascimento Castro',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 3,
                      'position': 'D',
                      'rating': '6.5',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'True',
                      'offsides': null,
                      'shots': {

                        'total': 2,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 66,
                        'key': 0,
                        'accuracy': 81,
                      },
                      'tackles': {

                        'total': 2,
                        'blocks': 0,
                        'interceptions': 1,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 1,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 1,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1277,
                      'player_name': 'François Kamano',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 11,
                      'position': 'M',
                      'rating': '6.4',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 1,
                        'on': 0,
                      },
                      'goals': {

                        'total': 1,
                        'conceded': 0,
                        'assists': 2,
                      },
                      'passes': {

                        'total': 35,
                        'key': 1,
                        'accuracy': 87,
                      },
                      'tackles': {

                        'total': 3,
                        'blocks': 0,
                        'interceptions': 2,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 3,
                        'success': 0,
                        'past': 2,
                      },
                      'fouls': {

                        'drawn': 2,
                        'committed': 1,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 2709,
                      'player_name': 'Youssef Aït Bennasser',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 17,
                      'position': 'M',
                      'rating': '6.7',
                      'minutes_played': 84,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 45,
                        'key': 1,
                        'accuracy': 86,
                      },
                      'tackles': {

                        'total': 2,
                        'blocks': 0,
                        'interceptions': 1,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 1,
                        'success': 0,
                        'past': 3,
                      },
                      'fouls': {

                        'drawn': 2,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1262,
                      'player_name': 'Otávio',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 5,
                      'position': 'M',
                      'rating': '6.6',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 1,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 63,
                        'key': 0,
                        'accuracy': 86,
                      },
                      'tackles': {

                        'total': 1,
                        'blocks': 0,
                        'interceptions': 1,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 2,
                        'success': 1,
                        'past': 2,
                      },
                      'fouls': {

                        'drawn': 5,
                        'committed': 3,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 941,
                      'player_name': 'Loris Benito',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 23,
                      'position': 'M',
                      'rating': '7.1',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 39,
                        'key': 1,
                        'accuracy': 83,
                      },
                      'tackles': {

                        'total': 3,
                        'blocks': 0,
                        'interceptions': 1,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 1,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1265,
                      'player_name': 'Yacine Adli',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 19,
                      'position': 'F',
                      'rating': '7.6',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 3,
                        'on': 2,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 32,
                        'key': 3,
                        'accuracy': 72,
                      },
                      'tackles': {

                        'total': 4,
                        'blocks': 0,
                        'interceptions': 0,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 2,
                        'success': 1,
                        'past': 2,
                      },
                      'fouls': {

                        'drawn': 4,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1276,
                      'player_name': 'Samuel Kalu',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 10,
                      'position': 'F',
                      'rating': '6.3',
                      'minutes_played': 55,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 1,
                        'on': 1,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 13,
                        'key': 0,
                        'accuracy': 65,
                      },
                      'tackles': {

                        'total': 0,
                        'blocks': 0,
                        'interceptions': 0,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 1,
                        'success': 0,
                        'past': 1,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1273,
                      'player_name': 'Jimmy Briand',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 7,
                      'position': 'F',
                      'rating': '7.0',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 1,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {
                        'total': 19,
                        'key': 2,
                        'accuracy': 86,
                      },
                      'tackles': {

                        'total': 1,
                        'blocks': 0,
                        'interceptions': 2,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 2,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1256,
                      'player_name': 'Vukašin Jovanović',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 14,
                      'position': 'D',
                      'rating': '7.2',
                      'minutes_played': 66,
                      'captain': 'False',
                      'substitute': 'True',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 58,
                        'key': 0,
                        'accuracy': 92,
                      },
                      'tackles': {

                        'total': 3,
                        'blocks': 0,
                        'interceptions': 5,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 2910,
                      'player_name': 'Ui Jo Hwang',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 18,
                      'position': 'F',
                      'rating': '6.9',
                      'minutes_played': 35,
                      'captain': 'False',
                      'substitute': 'True',
                      'offsides': null,
                      'shots': {

                        'total': 2,
                        'on': 2,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 16,
                        'key': 0,
                        'accuracy': 94,
                      },
                      'tackles': {

                        'total': 0,
                        'blocks': 0,
                        'interceptions': 0,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 1,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1279,
                      'player_name': 'Josh Maja',
                      'team_id': 78,
                      'team_name': 'Bordeaux',
                      'number': 9,
                      'position': 'F',
                      'rating': '6.0',
                      'minutes_played': 10,
                      'captain': 'False',
                      'substitute': 'True',
                      'offsides': null,
                      'shots': {

                        'total': 1,
                        'on': 1,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 2,
                        'key': 0,
                        'accuracy': 66,
                      },
                      'tackles': {

                        'total': 0,
                        'blocks': 0,
                        'interceptions': 0,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 1,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 22083,
                      'player_name': 'Stéphane Ruffier',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 16,
                      'position': 'G',
                      'rating': '8.9',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 18,
                        'key': 0,
                        'accuracy': 50,
                      },
                      'tackles': {

                        'total': 0,
                        'blocks': 0,
                        'interceptions': 0,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 22094,
                      'player_name': 'Wesley Fofana',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 32,
                      'position': 'D',
                      'rating': '7.1',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 27,
                        'key': 0,
                        'accuracy': 75,
                      },
                      'tackles': {

                        'total': 2,
                        'blocks': 0,
                        'interceptions': 4,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 1,
                        'committed': 2,
                      },
                      'cards': {

                        'yellow': 1,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 22088,
                      'player_name': 'Loïc Perrin',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 24,
                      'position': 'D',
                      'rating': '6.6',
                      'minutes_played': 45,
                      'captain': 'True',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {
                        'total': 14,
                        'key': 0,
                        'accuracy': 87,
                      },
                      'tackles': {

                        'total': 1,
                        'blocks': 0,
                        'interceptions': 0,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 4,
                      },
                      'cards': {

                        'yellow': 1,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 22090,
                      'player_name': 'William Saliba',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 4,
                      'position': 'D',
                      'rating': '7.1',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 34,
                        'key': 0,
                        'accuracy': 82
                      },
                      'tackles': {

                        'total': 0,
                        'blocks': 0,
                        'interceptions': 2
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      }
                    },
                    {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1261,
                      'player_name': 'Sergi Palencia',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 23,
                      'position': 'M',
                      'rating': '6.6',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                    'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                    'passes': {

                        'total': 17,
                    'key': 1,
                    'accuracy': 65,
                      },
                    'tackles': {

                        'total': 2,
                    'blocks': 0,
                        'interceptions': 0,
                      },
                    'duels': {

                        'total': 0,
                        'won': 0,
                      },
                    'dribbles': {

                        'attempts': 1,
                    'success': 1,
                    'past': 0,
                      },
                    'fouls': {

                        'drawn': 1,
                    'committed': 1,
                      },
                    'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                    'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                   {

                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 22096,
                      'player_name': 'Yann M\'Vila',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 6,
                      'position': 'M',
                      'rating': '6.7',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 1,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                    'passes': {

                        'total': 34,
                    'key': 0,
                        'accuracy': 81,
                      },
                    'tackles': {

                        'total': 0,
                        'blocks': 0,
                        'interceptions': 1
                      },
                    'duels': {

                        'total': 0,
                        'won': 0,
                      },
                    'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                    'fouls': {

                        'drawn': 1,
                    'committed': 1,
                      },
                    'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                    'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                     {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 1272,
                      'player_name': 'Zaydou Youssouf',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 28,
                      'position': 'M',
                      'rating': '7.4',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 1,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                    'passes': {

                        'total': 28,
                    'key': 1,
                    'accuracy': 70,
                      },
                    'tackles': {

                        'total': 2,
                    'blocks': 0,
                        'interceptions': 2,
                      },
                    'duels': {

                        'total': 0,
                        'won': 0,
                      },
                    'dribbles': {

                        'attempts': 3,
                    'success': 3,
                    'past': 1
                      },
                    'fouls': {

                        'drawn': 1,
                    'committed': 2,
                      },
                    'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                    'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                   {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 21437,
                      'player_name': 'Denis Bouanga',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 20,
                      'position': 'M',
                      'rating': '7.4',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 3,
                        'on': 3,
                      },
                      'goals': {

                        'total': 1,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 12,
                        'key': 0,
                        'accuracy': 80,
                      },
                      'tackles': {

                        'total': 5,
                        'blocks': 0,
                        'interceptions': 2,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 13,
                        'success': 5,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 4
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 1,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 47436,
                      'player_name': 'Ryad Boudebouz',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 7,
                      'position': 'F',
                      'rating': '6.9',
                      'minutes_played': 84,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 29,
                        'key': 0,
                        'accuracy': 76,
                      },
                      'tackles': {

                        'total': 2,
                        'blocks': 0,
                        'interceptions': 0,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 1,
                        'success': 1,
                        'past': 1,
                      },
                      'fouls': {

                        'drawn': 1,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 22102,
                      'player_name': 'Wahbi Khazri',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 10,
                      'position': 'F',
                      'rating': '6.7',
                      'minutes_played': 77,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 9,
                        'key': 1,
                        'accuracy': 56,
                      },
                      'tackles': {

                        'total': 3,
                        'blocks': 0,
                        'interceptions': 0,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 1,
                        'committed': 2,
                      },
                      'cards': {

                        'yellow': 1,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 67785,
                      'player_name': 'Charles Abi',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 31,
                      'position': 'F',
                      'rating': '6.6',
                      'minutes_played': 90,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 1,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 7,
                        'key': 0,
                        'accuracy': 38,
                      },
                      'tackles': {

                        'total': 3,
                        'blocks': 0,
                        'interceptions': 1,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 4,
                        'success': 1,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 1,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 22086,
                      'player_name': 'Timothée Kolodziejczak',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 5,
                      'position': 'D',
                      'rating': '6.6',
                      'minutes_played': 45,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 13,
                        'key': 0,
                        'accuracy': 61,
                      },
                      'tackles': {

                        'total': 0,
                        'blocks': 0,
                        'interceptions': 0,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 1,
                        'success': 1,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 0,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                    'penalty': {
                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 22097,
                      'player_name': 'Arnaud Nordin',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 18,
                      'position': 'M',
                      'rating': '6.9',
                      'minutes_played': 10,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {

                        'total': 0,
                        'on': 0,
                      },
                      'goals': {

                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                      'passes': {

                        'total': 0,
                        'key': 0,
                        'accuracy': 0,
                      },
                      'tackles': {

                        'total': 0,
                        'blocks': 0,
                        'interceptions': 0,
                      },
                      'duels': {

                        'total': 0,
                        'won': 0,
                      },
                      'dribbles': {

                        'attempts': 0,
                        'success': 0,
                        'past': 0,
                      },
                      'fouls': {

                        'drawn': 1,
                        'committed': 0,
                      },
                      'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                      'penalty': {

                        'won': 1,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      },
                    },
                    {
                      'event_id': 157508,
                      'updateAt': 1579187376,
                      'player_id': 90488,
                      'player_name': 'Yohan Cabaye',
                      'team_id': 1063,
                      'team_name': 'Saint Etienne',
                      'number': 29,
                      'position': 'M',
                      'rating': '6.7',
                      'minutes_played': 13,
                      'captain': 'False',
                      'substitute': 'False',
                      'offsides': null,
                      'shots': {
                        'total': 0,
                        'on': 0,
                      },
                    'goals': {
                        'total': 0,
                        'conceded': 0,
                        'assists': 0,
                      },
                    'passes': {
                        'total': 3,
                    'key': 0,
                        'accuracy': 100
                      },
                    'tackles': {

                        'total': 1,
                    'blocks': 0,
                        'interceptions': 0,
                      },
                    'duels': {

                        'total': 0,
                        'won': 0,
                      },
                    'dribbles': {

                        'attempts': 1,
                    'success': 1,
                    'past': 0,
                      },
                    'fouls': {

                        'drawn': 0,
                        'committed': 1,
                      },
                    'cards': {

                        'yellow': 0,
                        'red': 0,
                      },
                    'penalty': {

                        'won': 0,
                        'commited': 0,
                        'success': 0,
                        'missed': 0,
                        'saved': 0,
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      )
    }, 1000)
  })
}