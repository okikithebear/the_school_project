import Item from "./Item";
import { CONTACTS,QUICKLINKS } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="flex flex-row justify-between md:justify-center md:space-x-24 p-8">
      <Item Links={CONTACTS} title="CONTACTS" />
      <Item Links={QUICKLINKS} title="QUICKLINKS" />
    </div>
  );
};

export default ItemsContainer;