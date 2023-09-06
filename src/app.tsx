import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function App() {
  return (
    <div className="container mx-auto bg-gray-200 h-screen">
      <header className="flex flex-wrap w-full bg-blue-200">
        <p>header here.</p>
      </header>
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full sm:w-1/3 md:w-1/4 px-2 bg-green-200">
          <div className="sticky  top-0 p-4 w-full">
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </div>
        </aside>
        <main className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 bg-red-200">
          <Button variant="contained">Hello React.</Button>
        </main>
      </div>
    </div>
  );
}

export default App;
