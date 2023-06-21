import { useEffect, useRef, useState } from "react";
import { getUsers } from "../user.service";
import { User } from "../../models/User";
import styles from "./Users.module.css";
import UserItem from "../../components/UserItem/UserItem";
import Header from "../../components/Header/Header";
import Loader from "../Loader/Loader";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const getUserData = async (pageNo: number) => {
    const obj = await getUsers(pageNo);
    setHasMore(obj.page < obj.total_pages);
    setUsers([...users, ...obj.data]);
  };

  const [users, setUsers] = useState<User[]>([]);
  const scrollContainerRef = useRef<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    getUserData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (!isLoading) {
      const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, clientHeight, scrollHeight } =
          scrollContainerRef.current;
        if (scrollTop + clientHeight + 5 >= scrollHeight) {
          setCurrentPage(currentPage + 1);
        }
        event.stopPropagation();
      };
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isLoading]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header title={"Users"} />
      <div ref={scrollContainerRef} className={styles.container}>
        {users.map((user: User) => (
          <UserItem key={user.id} {...user} />
        ))}
        {!hasMore && <div className={styles.message}>no more users</div>}
      </div>
    </>
  );
};

export default Users;
