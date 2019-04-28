import React from 'react';
import { shallow } from 'enzyme';

import Tile from './tile';
import { idText } from 'typescript';

describe('Tile', () => {
    it('should render Tile component', () => {
        const tileComponent = shallow(<Tile />);
        expect(tileComponent).toMatchSnapshot();
    });
});