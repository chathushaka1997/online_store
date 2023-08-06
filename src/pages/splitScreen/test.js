



export function PageSplitterCheck(items, itemsPerPage, checkItemsOnPage, checkItemBelongsTo){
    let splitter = new PageSplitterCheck(items, itemsPerPage);
    let solutions = [];
    solutions[0] = splitter.pageCount();
    solutions[1] = splitter.itemCount();
    solutions[2] = splitter.pageItemCount(checkItemsOnPage);
    solutions[3] = splitter.pageIndex(checkItemBelongsTo)
    return solutions;
}

class PageSplitter{

}