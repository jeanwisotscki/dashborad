import React from "react";
import { useSearchParams } from "react-router-dom";
import { ListingToolbar } from "../../shared/components/ListingToolbar";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";
import { pessoasServices } from "../../shared/services/api/pessoas/pessoasServices";

export const Pessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = React.useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  React.useEffect(() => {
    pessoasServices.getAll(1, busca).then((res) => {
      if (res instanceof Error) {
        alert(res.message);
        return;
      }
      console.log(res);
    });
  }, [busca]);

  return (
    <LayoutBasePage
      titulo="Listagem de pessoas"
      toolbar={
        <ListingToolbar
          addButtonText="Nova"
          showInputSearch
          searchText={busca}
          onChangeSearchText={(text) =>
            setSearchParams({ busca: text }, { replace: true })
          }
        />
      }
    >
      topz3ra
    </LayoutBasePage>
  );
};