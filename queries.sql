-- write your queries here
SELECT
    *
from
    owners o Full
    outer JOIN vehicles vehicleson o.id - v.owner(id);

SELECT
    first_name,
    last_name,
    count owner_id
from
    owners o
    JOIN vehicles v on o.id - v.owner_id
group by
    (first_name, last_name)
order by
    first_name;

SELECT
    first_name,
    last_name round(avg(price)) as average_price,
    count(owner_id)
from
    owners onjoin vehicles v on o.id - v.owner_id
group by
    (first_name, last_name)
HAVING
    COUNT(owner_id) > 1
    and round(avg(price)) > 10000
order by
    first_name desc;