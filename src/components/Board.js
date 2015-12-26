import React from 'react';

import { STYLES } from '../consts';
import Square from './Square';


export default class Board extends React.Component {

  _createSquareElements() {
    const elements = [];
    this.props.squares.forEach((rowSquares, rowIndex) => {
      rowSquares.forEach((square, columnIndex) => {
        elements.push(React.createElement(Square, {
          key: `square-${ rowIndex }-${ columnIndex }`,
          top: STYLES.SQUARE_HEIGHT * rowIndex + STYLES.SQUARE_MARGIN * (rowIndex + 1),
          left: STYLES.SQUARE_WIDTH * columnIndex + STYLES.SQUARE_MARGIN * (columnIndex + 1),
          rowIndex,
          columnIndex,
          reversiPieceType: square.reversiPieceType,
        }));
      });
    });
    return elements;
  }

  render() {
    const squareElements = this._createSquareElements();

    return (
      <div className="board">
        <div className="board-inner">
          { squareElements }
        </div>
      </div>
    );
  }
}

Object.assign(Board, {
  propTypes: {
    squares: React.PropTypes.array.isRequired,
  },
});
