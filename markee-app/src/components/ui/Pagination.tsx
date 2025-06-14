import React, { useEffect, useState } from "react"
import { Grid, Flex, IconButton } from "@radix-ui/themes"
import ChevronSVG from '../../icons/chevron-right.svg';
import { PropsWithChildren } from "react";

interface NewsCardProps {
    data: Number[],
    paginatedData: React.Dispatch<React.SetStateAction<Number[]>>
}

interface PageNumberProps {
    totalPageCount: number;
    setPageIndex: (index: number) => void;
    pageIndex: number;
}


export const RenderPagination: React.FC<PropsWithChildren<PageNumberProps>> = ({ totalPageCount, setPageIndex, pageIndex }) => {
    const pages = [];

    const createPageButton = (pageNumber: number) => (
        <IconButton
            size="1"
            variant="soft"
            key={pageNumber}
            onClick={() => setPageIndex(pageNumber)}
            className={pageIndex === pageNumber ? 'activepage' : 'inactivepage'}
            
        >
            {pageNumber + 1}
        </IconButton>
    );

    pages.push(createPageButton(0));

    if (pageIndex > 2) {
        pages.push(<span key="dots1">...</span>);
    }

    for (let i = Math.max(1, pageIndex - 1); i <= Math.min(pageIndex + 1, totalPageCount - 2); i++) {
        pages.push(createPageButton(i));
    }

    if (pageIndex < totalPageCount - 3) {
        pages.push(<span key="dots2">...</span>);
    }

    if (totalPageCount > 1) {
        pages.push(createPageButton(totalPageCount - 1));
    }

    return (
        <>
            {pages}
        </>
    );
};

const NewsCardPagination: React.FC<PropsWithChildren<NewsCardProps>> = ({ data, paginatedData }) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const totalPages = Math.ceil(data.length / pageSize);
    useEffect(() => {
        paginatedData(data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize))
    }, [pageIndex])

    useEffect(() => {
        setPageIndex(0)
    }, [pageSize])

    return (
        <div className="flex items-center gap-2 mb-2">
            <Grid columns="3" gap="3" className="flex w-100 p-10 items-center jus-between">
                <span className="flex items-center gap-1" >
                    <span style={{fontSize:'12px', fontWeight:'500'}}>
                        <span> Page </span>
                        {pageIndex + 1} of {totalPages.toLocaleString()}
                        <span> - {data.length} total results</span>
                    </span>
                </span>
                <Flex align="center" justify='center' gap="3">
                    <IconButton size="1" variant="soft"
                        onClick={() => setPageIndex(prev => Math.max(prev - 1, 0))}
                        disabled={pageIndex === 0}
                        style={{ background: 'transparent', color: 'black' }}
                    >
                        <img src={ChevronSVG} width='22' height='22' alt="Properties" style={{ transform: 'rotate(180deg)' }} />
                    </IconButton>

                    <RenderPagination
                        totalPageCount={totalPages}
                        setPageIndex={setPageIndex}
                        pageIndex={pageIndex}
                    />

                    <IconButton size="1" variant="soft"
                        onClick={() => setPageIndex(prev => Math.min(prev + 1, totalPages - 1))}
                        disabled={pageIndex === totalPages - 1}
                        style={{ background: 'transparent', color: 'black' }}

                    >
                        <img src={ChevronSVG} width='22' height='22' alt="Properties" />
                    </IconButton>
                </Flex>
                <div style={{ textAlign: 'right' }}>
                <span style={{fontSize:'12px', fontWeight:'500'}}>
                        Per Page
                        <select
                            value={pageSize}
                            onChange={e => {
                                setPageSize(Number(e.target.value))
                            }}
                            style={{ width: 50, marginLeft: "10px" }}
                        >
                            {[10, 20, 30, 40, 50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
            </Grid>
        </div>
    );
};

export default NewsCardPagination