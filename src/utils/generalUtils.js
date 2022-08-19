export const handleAction = (type, resource, router, setOpenSearch) => {
    type === "feature" ? scrollToBottom(setOpenSearch) : router.push(`/${type}/${resource}`);
  };
  
export const scrollToBottom = (setOpenSearch) => {
      setOpenSearch(false);
      // scroll to bottom of page
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    };
    
  