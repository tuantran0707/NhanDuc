export type Player = {
  stt: number;
  name: string;
  number: number;
  size?: string;
  dob?: string;
  position?: string;
  squad?: "san11" | "s7giai" | "s7noibo" | "both";
};

// Dữ liệu cầu thủ Nhân Đức FC (do CLB cung cấp)
export const players: Player[] = [
  { stt: 1, name: "Văn Nhân", number: 8, position: "Trưởng đoàn", squad: "san11" },
  { stt: 2, name: "Hoàng Nguyễn", number: 68, position: "HLV trưởng", squad: "san11" },
  { stt: 3, name: "Đỗ Đạt", number: 4, position: "Trợ lý HLV", squad: "san11" },
  { stt: 4, name: "Hoàng Trung", number: 1, position: "GK", squad: "san11" },
  { stt: 5, name: "Quốc Hưng", number: 43, position: "GK", squad: "san11" },
  { stt: 6, name: "Ngọc Huy", number: 35, position: "GK", squad: "san11" },
  { stt: 7, name: "Văn Hà", number: 5, position: "Defenders", squad: "san11" },
  { stt: 8, name: "Vinh Trương (Vinh Dybala)", number: 22, position: "Midfielders", squad: "san11" },
  { stt: 9, name: "Thành Hiếu", number: 37, position: "Midfielders", squad: "san11" },
  { stt: 10, name: "Đức Mạnh", number: 27, position: "Midfielders", squad: "san11" },
  { stt: 11, name: "Phi Thông (Thông Muller)", number: 29, position: "Forwards", squad: "san11" },
  { stt: 12, name: "Tony Trần", number: 96, position: "Forwards" },
  { stt: 13, name: "Phú Nguyên (Phú Pepe)", number: 20, position: "Defenders", squad: "san11" },
  { stt: 14, name: "Sỹ Nguyễn", number: 19, position: "Midfielders", squad: "san11" },
  { stt: 15, name: "Xuân Mạnh (Mạnh Ka78)", number: 92, position: "Midfielders", squad: "san11" },
  { stt: 16, name: "Lâm Viên", number: 47, position: "Midfielders", squad: "san11" },
  { stt: 17, name: "Trần Tín", number: 21, position: "Defenders", squad: "san11" },
  { stt: 18, name: "Dũng Trần", number: 2, position: "Defenders", squad: "san11" },
  { stt: 19, name: "Quốc Vương", number: 31, position: "Forwards", squad: "san11" },
  { stt: 20, name: "Huỳnh Phong", number: 78, position: "Defenders", squad: "san11" },
  { stt: 21, name: "Võ Lực", number: 74, position: "Defenders", squad: "san11" },
  { stt: 22, name: "Viết Thành", number: 15, position: "Defenders", squad: "san11" },
  { stt: 23, name: "Duy Tuấn", number: 77, position: "Forwards", squad: "san11" },
  { stt: 24, name: "Bá Trung", number: 55, position: "Forwards", squad: "san11" },
  { stt: 25, name: "Đinh Thiên", number: 10, position: "Forwards", squad: "san11" },
  { stt: 26, name: "Hữu Thức", number: 16, position: "Midfielders", squad: "san11" },
  { stt: 27, name: "Tấn Phước (Phước Classic)", number: 7, position: "Forwards", squad: "san11" },
  { stt: 28, name: "Hữu Phước", number: 12, position: "Midfielders", squad: "san11" },
  { stt: 29, name: "Văn An", number: 99, position: "Forwards", squad: "san11" },
  { stt: 30, name: "Hát Phạm", number: 52, position: "Midfielders", squad: "san11" },
  { stt: 31, name: "Ngọc Huỳnh", number: 11, position: "Midfielders", squad: "san11" },
  { stt: 32, name: "Phạm Khánh", number: 28, position: "Forwards", squad: "san11" },
  { stt: 33, name: "Quốc Núi", number: 23, position: "Midfielders", squad: "san11" },
  { stt: 34, name: "Thanh Hưng", number: 26, position: "Midfielders", squad: "san11" },
  { stt: 35, name: "Minh Tân", number: 57, position: "Defenders", squad: "san11" },
  { stt: 36, name: "Tuấn Phát", number: 14, position: "Midfielders", squad: "san11" },
  { stt: 37, name: "Hoài Bảo", number: 39, position: "Midfielders", squad: "san11" },
  { stt: 38, name: "Duy Tùng", number: 24, position: "Midfielders" },
  { stt: 39, name: "Anh Tuấn", number: 83, position: "Midfielders" },
  { stt: 40, name: "Mạnh Quang", number: 38, position: "Midfielders" },
  { stt: 41, name: "Ngọc Cường", number: 30, position: "GK" },
  { stt: 42, name: "HLV Vũ Nghệ", number: 9, position: "HLV", squad: "san11" },
  { stt: 43, name: "Văn Vin", number: 33, position: "GK", squad: "san11" },
  { stt: 44, name: "Trần Linh", number: 17, position: "Midfielders", squad: "san11" },
  { stt: 45, name: "Tấn Hòa", number: 6, position: "Midfielders", squad: "san11" },
  { stt: 46, name: "Đức Nhật", number: 18, position: "Defenders", squad: "san11" },
  { stt: 47, name: "Trần Vũ", number: 32, position: "Defenders", squad: "san11" },
  { stt: 48, name: "Minh Giàu", number: 36, position: "Midfielders", squad: "san11" },
];

export const positionGroups = [
  { key: "Bầu", label: "Ban lãnh đạo" },
  { key: "HLV", label: "Huấn luyện viên" },
  { key: "GK", label: "Thủ môn" },
  { key: "DF", label: "Hậu vệ" },
  { key: "MF", label: "Tiền vệ" },
  { key: "FW", label: "Tiền đạo" },
  { key: "?", label: "Chưa phân loại" }
];

export function groupKey(p: Player): string {
  if (!p.position) return "?";
  const pos = p.position.toLowerCase();
  if (pos.includes("bầu") || pos.includes("trưởng đoàn")) return "Bầu";
  if (pos.includes("hlv")) return "HLV";
  if (pos.includes("gk") || pos.includes("thủ môn")) return "GK";
  if (pos.includes("hậu vệ") || pos.includes("trung vệ") || pos.includes("defender")) return "DF";
  if (pos.includes("tiền vệ") || pos.includes("midfielder")) return "MF";
  if (pos.includes("tiền đạo") || pos.includes("forward")) return "FW";
  return "?";
}
