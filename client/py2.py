# def iterative_deepening_dfs(start, target):
#     """
#     Implementation of iterative deepening DFS (depth-first search) algorithm to find the shortest path from a start to a target node..
#     Given a start node, this returns the node in the tree below the start node with the target value (or null if it doesn't exist)
#     Runs in O(n), where n is the number of nodes in the tree, or O(b^d), where b is the branching factor and d is the depth.
#     :param start:  the node to start the search from
#     :param target: the value to search for
#     :return: The node containing the target value or null if it doesn't exist.
#     """
#     # Start by doing DFS with a depth of 1, keep doubling depth until we reach the "bottom" of the tree or find the node we're searching for
#     depth = 1
#     bottom_reached = False  # Variable to keep track if we have reached the bottom of the tree
#     while not bottom_reached:
#         # One of the "end nodes" of the search with this depth has to still have children and set this to False again
#         result, bottom_reached = iterative_deepening_dfs_rec(start, target, 0, depth)
#         if result is not None:
#             # We've found the goal node while doing DFS with this max depth
#             return result

#         # We haven't found the goal node, but there are still deeper nodes to search through
#         depth *= 2
#         print("Increasing depth to " + str(depth))

#     # Bottom reached is True.
#     # We haven't found the node and there were no more nodes that still have children to explore at a higher depth.
#     return None


# def iterative_deepening_dfs_rec(node, target, current_depth, max_depth):
#     print("Visiting Node " + str(node["value"]))

#     if node["value"] == target:
#         # We have found the goal node we we're searching for
#         print("Found the node we're looking for!")
#         return node, True

#     if current_depth == max_depth:
#         print("Current maximum depth reached, returning...")
#         # We have reached the end for this depth...
#         if len(node["children"]) > 0:
#             # ...but we have not yet reached the bottom of the tree
#             return None, False
#         else:
#             return None, True

#     # Recurse with all children
#     bottom_reached = True
#     for i in range(len(node["children"])):
#         result, bottom_reached_rec = iterative_deepening_dfs_rec(node["children"][i], target, current_depth + 1,
#                                                                  max_depth)
#         if result is not None:
#             # We've found the goal node while going down that child
#             return result, True
#         bottom_reached = bottom_reached and bottom_reached_rec

#     # We've gone through all children and not found the goal node
#     return None, bottom_reached



# class Node:
#     def __init__(self, val=None):
#         self.val = val
#         self.left = None
#         self.right = None
 
 
# def get_root():
#     values = iter([3, 8, 6, 9, None, None, 11, 10, None, None,
#               12, None, None, 7, None, None, 4, 5, None, None, 13, None, None])
 
#     def tree_recur(itr):
#         val = next(itr)
#         if val is not None:
#             node = Node(val)
#             node.left = tree_recur(itr)
#             node.right = tree_recur(itr)
#             return node
 
#     return tree_recur(values)

# def dfids():
#     root = get_root()
#     res = float("inf")
 
#     def dfids_search(node, depth, limit):
#         if depth <= limit and node is not None:
#             val = node.val
#             if val == 12:
#                 nonlocal res
#                 res = min(res, depth)
#             else:
#                 dfids_search(node.left, depth + 1, limit)
#                 dfids_search(node.right, depth + 1, limit)
 
#     for limit in range(1,5):
#         dfids_search(root, 0, limit)
#         if res < float("inf"):
#             return res
#     return -1
 
# if __name__ == "__main__":
#    print("\nShortest Depth: ", dfids())


class Node(object):
    """This class represents a node in a graph."""
    
    def __init__(self, label: str=None):
        """
        Initialize a new node.
        
        Args:
            label: the string identifier for the node
        """
        self.label = label
        self.children = []
        
    def __lt__(self,other):
        """
        Perform the less than operation (self < other).
        
        Args:
            other: the other Node to compare to
        """
        return (self.label < other.label)
    
    def __gt__(self,other):
        """
        Perform the greater than operation (self > other).
        
        Args:
            other: the other Node to compare to
        """
        return (self.label > other.label)
    
    def __repr__(self):
        """Return a string form of this node."""
        return '{} -> {}'.format(self.label, self.children)
    
    def add_child(self, node, cost=1):
        """
        Add a child node to this node.
        
        Args:
            node: the node to add to the children
            cost: the cost of the edge (default 1)
        """
        if type(node) is list:
            [self.add_child(sub_node) for sub_node in node]
            return
        edge = Edge(self, node, cost)
        self.children.append(edge)
    
    
class Edge(object):
    """This class represents an edge in a graph."""
    
    def __init__(self, source: Node, destination: Node, cost: int=1, bidirectional: bool=False):
        """
        Initialize a new edge.
        
        Args:
            source: the source of the edge
            destination: the destination of the edge
            cost: the cost of the edge (default 1)
            bidirectional: whether source is accessible (default False)
        """
        self.source = source
        self.destination = destination
        self.cost = cost
        self.bidirectional = bidirectional
    
    def __repr__(self):
        """Return a string form of this edge."""
        return '{}: {}'.format(self.cost, self.destination.label)
A = Node('A')
B = Node('B')
C = Node('C')
D = Node('D')
E = Node('E')
F = Node('F')
G = Node('G')
A.add_child([B, C, E])
B.add_child([A, D, F])
C.add_child([G, A])
D.add_child(B)
E.add_child([F, A])
F.add_child([E, B])
G.add_child(C)

_ = [print(node) for node in [A, B, C, D, E, F, G]]