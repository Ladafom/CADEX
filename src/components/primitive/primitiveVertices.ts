interface PrimitiveInfoType {
  vertices: number[];
  indices: number[];
}

type PrimitiveType = 'box' | 'pyramid';

export function createPrimitive(
  type: PrimitiveType,
  width: number,
  height: number,
  length: number
): PrimitiveInfoType {
  switch (type) {
    case 'box':
      return createBox(width, height, length);
    case 'pyramid':
      return createPyramid(width, height, length);
    default:
      return createBox(width, height, length);
  }
}

function createBox(width: number, height: number, length: number): PrimitiveInfoType {
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const halfLength = length / 2;

  return {
    vertices: [
      halfWidth, -halfHeight, halfLength,  // A (0)
      halfWidth, halfHeight, halfLength,   // B (1)
      -halfWidth, halfHeight, halfLength,  // C (2)
      -halfWidth, -halfHeight, halfLength, // D (3)

      halfWidth, -halfHeight, -halfLength, // E (4)
      halfWidth, halfHeight, -halfLength,  // F (5)
      -halfWidth, halfHeight, -halfLength, // G (6)
      -halfWidth, -halfHeight, -halfLength,// H (7)

      halfWidth, halfHeight, halfLength,   // B (8)
      -halfWidth, halfHeight, halfLength,  // C (9)
      -halfWidth, halfHeight, -halfLength, // G (10)
      halfWidth, halfHeight, -halfLength,  // F (11)

      halfWidth, -halfHeight, halfLength,  // A (12)
      -halfWidth, -halfHeight, halfLength, // D (13)
      -halfWidth, -halfHeight, -halfLength,// H (14)
      halfWidth, -halfHeight, -halfLength, // E (15)

      halfWidth, -halfHeight, halfLength,  // A (16)
      halfWidth, halfHeight, halfLength,   // B (17)
      halfWidth, halfHeight, -halfLength,  // F (18)
      halfWidth, -halfHeight, -halfLength, // E (19)

      -halfWidth, -halfHeight, halfLength, // D (20)
      -halfWidth, halfHeight, halfLength,  // C (21)
      -halfWidth, halfHeight, -halfLength, // G (22)
      -halfWidth, -halfHeight, -halfLength,// H (23)
    ],
    indices: [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10, 11,
      12, 13, 14, 12, 14, 15,
      16, 17, 18, 16, 18, 19,
      20, 21, 22, 20, 22, 23,
    ]
  };
}

function createPyramid(width: number, height: number, length: number): PrimitiveInfoType {
  const halfWidth = width / 2;
  const halfLength = length / 2;

  return {
    vertices: [

      halfWidth, 0, halfLength,  
      -halfWidth, 0, -halfLength, 
      halfWidth, 0, -halfLength,  
      
      halfWidth, 0, halfLength,
      -halfWidth, 0, halfLength,
      -halfWidth, 0, -halfLength,
      
      -halfWidth, 0, halfLength,
      halfWidth, 0, halfLength,    
      0, height, 0,           
      
      halfWidth, 0, halfLength,  
      halfWidth, 0, -halfLength,
      0, height, 0,
      
      halfWidth, 0, -halfLength,
      -halfWidth, 0, -halfLength,
      0, height, 0,
      
      -halfWidth, 0, -halfLength,
      -halfWidth, 0, halfLength,
      0, height, 0,
    ],
    
    indices: [
      0, 1, 2,
      3, 4, 5,
      
      6, 7, 8,
      9, 10, 11,
      12, 13, 14,
      15, 16, 17
    ]
  };
}