/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Button, Col, Row, Statistic, List, Avatar, message } from "antd";

import VirtualList from "rc-virtual-list";
import AppHerder from "@/components/AppHerder";
import TransitionRow from '@/components/TransitionRow';
import SummaryCard from "@/components/SummaryCard";
import NewTransitionModal from "@/components/NewTransitionModal";



const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";

const ContainerHeight = 400;
export default function Index() {

  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        // message.success(`${body.results.length} more items loaded!`);
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };

  return (
    <>
      <AppHerder title="Home" />
      <div>
        <Link href="/">index</Link>
        <br />
        <Link href="/sign-in">sign-in</Link>
        <br />
        <Link href="/sign-up">sign-up</Link>
        <br />
      </div>
      <Row gutter={16}>
        <Col span={12}>
          <SummaryCard value={121222} />
        </Col>
        <Col span={12}>
          <NewTransitionModal loading={false} onFinish={() => { }} />
        </Col>
      </Row>
      <List>
        <VirtualList
          data={data}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="email"
          onScroll={onScroll}>
          {(item) => (
            <TransitionRow item={item} />
          )}
        </VirtualList>
      </List>
    </>
  );
};
