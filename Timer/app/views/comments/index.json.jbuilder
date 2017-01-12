json.array! @comments do |comment|
  json.body comment.body
  json.created_at comment.created_at.
      strftime('%d %b %Y %H:%M:%S')
end