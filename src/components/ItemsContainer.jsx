import Item from "./Item";
import { CONTACTS,QUICKLINKS } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={CONTACTS} title="CONTACTS" />
      <Item Links={QUICKLINKS} title="QUICKLINKS" />
    </div>
  );
};

export default ItemsContainer;