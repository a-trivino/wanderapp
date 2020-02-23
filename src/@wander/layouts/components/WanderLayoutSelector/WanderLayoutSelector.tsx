import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { LayoutContext } from '../../../../contexts/LayoutContext';
import Layouts from '../../Layouts';

const WanderLayoutSelector: React.FC = (props) => {
  const layouts = Layouts;
  const keys = Object.keys(layouts);
  var layoutContext = useContext(LayoutContext);
  return (
    <div>
      {keys.map((x) => {
        return (
          <div>
            <Button
              onClick={() => {
                layoutContext && layoutContext.setLayout(x);
              }}
              color='secondary'>
              {x}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default WanderLayoutSelector;
