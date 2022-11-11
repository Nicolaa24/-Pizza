import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from './Menu-item';
import carbonaraImg from '../../../assets/images/pizza/carbonara.jpeg';


export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;


const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const View = Template.bind({});
View.args = {
  imagePath: carbonaraImg,
  weight: 555,
  title: "Піца Карбонара",
  ingredients: "(подвійна парція грибів), Гриби, Бекон, Сир, Цибуля",
  price: 200
}
