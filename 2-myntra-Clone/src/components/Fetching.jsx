import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusAction } from "../store/FetchStatusSlice";
import { itemsAction } from "../store/Items";

const Fetching = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  console.log(fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);
  
  useEffect(() => {
      if (fetchStatus.fetchDone) return;
      const controller = new AbortController();
      const signal = controller.signal;

      dispatch(fetchStatusAction.markFetchStarted());
    fetch("http://localhost:8080/items",{ signal })
      .then((items) => items.json())
      .then((item) => {
        dispatch(itemsAction.addInitialPost(item.items));

        dispatch(fetchStatusAction.markFetchFinished());
        dispatch(fetchStatusAction.markFetchDone());
      });

      return () => {
        controller.abort();
      };

  }, [fetchStatus]);

  return <>
  </>
};

export default Fetching;
