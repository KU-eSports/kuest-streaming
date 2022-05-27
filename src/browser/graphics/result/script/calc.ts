import type { MatchDto } from "../../../../@types/valorant";


export function sortPlayers(result: MatchDto) {
  const players = result.players;
  players.sort((a, b) => {
    return (a.stats.score > b.stats.score) ? -1 : 1;
  });
  const teams = result.teams;
  result.teams.sort((a, b) => {
    return (a.won > b.won) ? -1 : 1;
  });
  const sorted = teams.map(t => {
    return players.filter(p => p.teamId === t.teamId);
  });
  return sorted;
}
