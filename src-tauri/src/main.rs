#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn console_out(mes: String) {
  println!("{}", mes);
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![ console_out ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
