export const handleAction = (type, resource, router, setOpenSearch, setSelectedFeatures, SelectedFeatures) => {
    type === "feature" ? scrollToBottom(setOpenSearch, resource, setSelectedFeatures, SelectedFeatures) : router.push(`/${type}/${resource}`);
  };
  
export const scrollToBottom = (setOpenSearch, id, setSelectedFeatures, SelectedFeatures) => {
      setOpenSearch(false);
      setSelectedFeatures([...SelectedFeatures, id]);
      // scroll to bottom of page
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    };
    
  