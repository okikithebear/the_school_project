import Item from "./Item";
import { CONTACTS, QUICKLINKS } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="flex flex-row md:space-y-0 ">
      {/*<Item Links={CONTACTS} title="CONTACTS" />*/}

      <Item Links={QUICKLINKS} title="QUICKLINKS" />
    </div>
  );
};

export default ItemsContainer;