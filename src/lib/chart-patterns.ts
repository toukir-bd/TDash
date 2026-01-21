export function createDotPattern(ctx: CanvasRenderingContext2D) {
  const canvas = document.createElement('canvas')
  canvas.width = 8
  canvas.height = 8

  const p = canvas.getContext('2d')!
  p.fillStyle = 'rgba(255,255,255,0.9)'
  p.beginPath()
  p.arc(2, 2, 1.5, 0, Math.PI * 2)
  p.fill()

  return ctx.createPattern(canvas, 'repeat')!
}

export function createStripePattern(ctx: CanvasRenderingContext2D) {
  const canvas = document.createElement('canvas')
  canvas.width = 12
  canvas.height = 12

  const p = canvas.getContext('2d')!
  p.strokeStyle = 'rgba(255,255,255,0.9)'
  p.lineWidth = 3
  p.beginPath()
  p.moveTo(0, 12)
  p.lineTo(12, 0)
  p.stroke()

  return ctx.createPattern(canvas, 'repeat')!
}
