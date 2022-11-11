import { MenuItem } from '../menu-item/Menu-item';
import carbonaraImg from '@app/assets/images/pizza/carbonara.jpeg';
import { Pizza } from '@app/types/interfaces';

interface Props {
  items: Pizza[];
}

export const MenuList:React.FC<Props> = ({items}) => {

  return (
    <div className='flex flex-wrap gap-10 justify-center mb-24'>
      {items.map(({ image, ...pizza }) => (
        <MenuItem key={pizza.id} {...pizza} imagePath={carbonaraImg} />
      ))}
    </div>
  )
}
