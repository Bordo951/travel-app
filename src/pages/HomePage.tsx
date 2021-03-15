import React from "react";
import СountriesBlock from "../components/homePage/Main/СountriesBlock";
import Search from "../components/homePage/Main/Search";
import styled from "styled-components";

const SearchWrapper = styled.div`
    padding: 10px 0;
`;

const HomePage: React.FC = () => {
    return (
        <main style={{ flex: '1 0 auto' }}>
            <SearchWrapper>
                <Search />
            </SearchWrapper>
            <СountriesBlock />
        </main>
    )
};

export default HomePage;
