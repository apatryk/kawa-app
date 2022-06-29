import { Card, List, Rate, Spin } from "antd";
import { useEffect, useState } from "react";

import { getComments, CommentAddForm } from "../lib/comment";

export const CommentList = (props: any) => {
    const [response, setResponse] = useState<Array<CommentAddForm>>();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const result = await getComments(props);
            setResponse(result.data);
            console.log(result.data)
            setLoaded(true);
        })();
    }, []);

    if (!loaded) {
        return <Spin size="large" />;
    }

    return (
        <>
            <List
                dataSource={response}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            title={item.email}
                            description={item.comment}
                        />
                        <Rate disabled defaultValue={item.rate} />
                    </List.Item>
                )}
            />
        </>
    );
};
