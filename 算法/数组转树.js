let arr = [
  { id: "29", pid: "", name: "总裁办" },
  { id: "2c", pid: "", name: "财务部" },
  { id: "2d", pid: "2c", name: "财务核算部" },
  { id: "2f", pid: "2c", name: "薪资管理部" },
  { id: "d2", pid: "", name: "技术部" },
  { id: "d3", pid: "d2", name: "Java研发部" },
];
function tranListToTreeData(list, pid = "") {
  // 先找到所有的根节点
  let tranList = list.filter((it) => it.pid === pid);
  tranList.forEach((itm) => {
    //传入id  list进行递归 在筛选出 他的父级 是一个数组
    itm.children = tranListToTreeData(list, itm.id);
  });
  return tranList;
}

console.log(tranListToTreeData(arr));
