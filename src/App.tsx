import {
  CeDataTable,
  CePagination,
  CeSvgIcon,
  CeMenuHeader,
  CeMenuSidebar,
  CeFooter,
  CeLayout,
} from "@comercti/react-components-hmg";
import { pen, trash01 } from "@comercti/icons-hmg";
import { useComponents } from "./useComponents";

const App = () => {
  const {
    items,
    itemsMenuMyService,
    headers,
    paginatedItems,
    currentPage,
    totalPages,
    menuAberto,
    handlePageChange,
    handleModelValueChange,
    actions,
    abriMenu,
  } = useComponents();

  const vSlots = {
    groupButton: (
      <div className="flex gap-2">
        <button className="bg-blue-500 p-3 rounded-lg text-white w-28 sm:w-full">
          Enviar
        </button>
        <button className="bg-red-500 p-3 rounded-lg text-white w-28 sm:w-full">
          Excluir
        </button>
      </div>
    ),
    pagination: (
      <CePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onUpdate:modelValue={handlePageChange}
      />
    ),
    title: "Usuários",
    status: ({ item }) => (
      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
        {item.status}
      </span>
    ),
    teams: ({ item }) => (
      <div className="flex space-x-1">
        {item.teams.map((team) => (
          <span
            key={team}
            className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
          >
            {team}
          </span>
        ))}
      </div>
    ),
    actionsBtn: ({ item }) => (
      <div>
        <button className="mr-2" onClick={() => actions(item)}>
          <CeSvgIcon name={pen} size="15" />
        </button>
        <button className="mr-2" onClick={() => actions(item)}>
          <CeSvgIcon name={trash01} size="15" />
        </button>
      </div>
    ),
  };

  const slotLayout = {
    header: (
      <CeMenuHeader itemsMenuMyService={itemsMenuMyService} itemsMenu={items} />
    ),

    sidebar: (
      <CeMenuSidebar
        items={items}
        isHome={true}
        isSearch={true}
        onToggleMenu={abriMenu}
      />
    ),
    content: (
      <CeDataTable
        selectable
        striped
        search
        headers={headers}
        items={paginatedItems}
        v-slots={vSlots}
        onUpdate:modelValue={handleModelValueChange}
      />
    ),

    footer: <CeFooter variant="5" background="white" />,
  };

  return (
    <CeLayout
      layout="default"
      openMenu={menuAberto}
      v-slots={slotLayout}
    ></CeLayout>
  );
};

export default App;
