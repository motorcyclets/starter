import { Level, Maze } from './types'

import { mazes } from 'domain/model'

export function loadMaze(level: Level): Maze {
  const maze = mazes[level > 0 ? level : 0]

  return maze
}
