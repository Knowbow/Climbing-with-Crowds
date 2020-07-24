require_relative 'tic_tac_toe'
require "byebug"
class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark 
    @prev_move_pos = prev_move_pos
  end

  

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    child = []
    (0..2).each do |i|
      (0..2).each do |j| 
        if @board.empty?([i,j])   
          @board[[i,j]] = next_mover_mark   
          prev_move_pos = [i,j]
          #next_mover_mark == :x ? :o : :
          if next_mover_mark == :x
            next_mover_mark = :o
          else
            next_mover_mark = :x
          end
          child << TicTacToeNode.new(@board.dup, next_mover_mark, prev_move_pos)
        end
      end
    end
    child
  end
  
  def opposite_mark(mark)
    if mark == :x
      :o
    else
      :x
    end
  end

  #Base case: the board is over AND
  #If winner is the opponent, this is a losing node.
  #If winner is nil or us, this is not a losing node.

  

require 'byebug'

  def losing_node?(evaluator)
    opponent = opposite_mark(evaluator)
    return true if @board.over? && (@board.winner != evaluator)
    return false if @board.over? && (@board.winner == nil || @board.winner == evaluator)
    #debugger
    if next_mover_mark == evaluator  
      children.all? {|child| child.losing_node?(evaluator)}
    else 
      children.any? {|child| child.losing_node?(evaluator)}
    end
    
  end

  def winning_node?(evaluator)

  end
end
