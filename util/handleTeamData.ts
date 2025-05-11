  export interface TeamData {
    color: 'black' | 'white' | 'purple'
    name: string
    logo: string
  }
  
  export interface MatchRate {
    win: number
    draw: number
    lose: number
  }
  
  export interface MatchTeamRecord {
    total: number
    quarters: number[]
    isWinner: boolean
  }
  
  export interface Match {
    date: string
    history: {
      team1: TeamData & MatchTeamRecord
      team2: TeamData & MatchTeamRecord
    }[]
  }


